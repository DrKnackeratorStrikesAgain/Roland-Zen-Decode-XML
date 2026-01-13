/**
 * Simple text/html/markdown table generator
 */
export class TableGen {
    constructor() {
        this.title = null;
        this.footer = null;
        this.hasHeader = true;
        this.colClass = {};
        this.tableClass = "";
        this.data = [[]];
        this.row = 0;
        this.anchor = null;  // For markdown/html anchors
        this.titleLink = null;  // Link for title (e.g., back to TOC)
        this.cellLinks = {}; // Map of "row,col" -> { text, href } for linked cells
        this.cellHTML = {}; // Map of "row,col" -> raw HTML string (not escaped)
    }

    put(...args) {
        for (const arg of args) {
            this.data[this.row].push(arg);
        }
    }

    putNewline(...args) {
        if (this.data.length > 0) {
            this.data[++this.row] = [];
        }

        for (const arg of args) {
            this.data[this.row].push(arg);
        }
    }

    // Set a cell to be a link (for markdown/html output)
    setCellLink(row, col, text, href) {
        this.cellLinks[`${row},${col}`] = { text, href };
    }

    // Set a cell to contain raw HTML (not escaped)
    setCellHTML(row, col, html) {
        this.cellHTML[`${row},${col}`] = html;
    }

    renderText() {
        let output = "";

        // calc max col size
        const colSize = [];
        for (const row of this.data) {
            for (let i = 0; i < row.length; i++) {
                const cellLen = String(row[i] ?? "").length;
                if (colSize[i] !== undefined) {
                    colSize[i] = Math.max(colSize[i], cellLen);
                } else {
                    colSize[i] = cellLen;
                }
            }
        }
        const totalColCount = colSize.length;

        const totalLength = colSize.reduce((a, b) => a + b, 0) + (colSize.length - 1) * 3 + 4;
        const separator = "+" + "-".repeat(totalLength - 2) + "+\r\n";

        output += separator;
        if (this.title) {
            output += `| ${this.title.padEnd(totalLength - 4)} |\r\n`;
            output += separator;
        }

        for (let rowNum = 0; rowNum < this.data.length; rowNum++) {
            const row = this.data[rowNum];
            const maxColForRow = row.length;
            const colArray = [];

            for (let i = 0; i < totalColCount; i++) {
                let cell;
                if (i >= maxColForRow) {
                    cell = "";
                } else {
                    cell = String(row[i] ?? "");
                }
                colArray.push(cell.padEnd(colSize[i]));
            }
            output += "| " + colArray.join(" | ") + " |\r\n";
            if (rowNum === 0 && this.hasHeader) {
                output += separator;
            }
        }

        output += separator;
        if (this.footer) {
            output += `| ${this.footer.padEnd(totalLength - 4)} |\r\n`;
            output += separator;
        }

        return output;
    }

    renderHTML() {
        let output = "";

        // calc max cols
        let totalColCount = 0;
        for (const row of this.data) {
            totalColCount = Math.max(totalColCount, row.length);
        }

        const escapeHtml = (str) => {
            return String(str ?? "")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;");
        };

        // Add anchor if present
        if (this.anchor) {
            output += `<a id="${escapeHtml(this.anchor)}"></a>`;
        }

        output += `<table class='${this.tableClass}'>`;
        if (this.title) {
            let titleHtml = escapeHtml(this.title);
            if (this.titleLink) {
                titleHtml = `${titleHtml} <a href="${escapeHtml(this.titleLink)}" style="text-decoration: none;">⬆</a>`;
            }
            output += `<tr><th colspan='${totalColCount}'>${titleHtml}</th></tr>`;
        }

        for (let rowNum = 0; rowNum < this.data.length; rowNum++) {
            const row = this.data[rowNum];
            const maxColForRow = row.length;
            const colArray = [];

            for (let i = 0; i < totalColCount; i++) {
                let cell;
                if (i >= maxColForRow) {
                    cell = "&nbsp;";
                } else {
                    const cellKey = `${rowNum},${i}`;
                    // Check for raw HTML first
                    if (this.cellHTML[cellKey]) {
                        cell = this.cellHTML[cellKey];
                    } else if (this.cellLinks[cellKey]) {
                        // Check for cell link
                        const link = this.cellLinks[cellKey];
                        cell = `<a href="${escapeHtml(link.href)}">${escapeHtml(link.text)}</a>`;
                    } else {
                        cell = escapeHtml(row[i]);
                    }
                }

                let tag = rowNum === 0 && this.hasHeader ? "th" : "td";
                if (this.colClass[i]) {
                    tag += ` class='${this.colClass[i]}'`;
                }

                colArray.push(`<${tag}>${cell}</${tag.split(" ")[0]}>`);
            }
            output += "<tr>" + colArray.join("") + "</tr>\r\n";
        }

        if (this.footer) {
            output += `<tr><th colspan='${totalColCount}'>${escapeHtml(this.footer)}</th></tr>`;
        }

        output += "</table>";

        return output;
    }

    renderMarkdown() {
        let output = "";

        // calc max cols
        let totalColCount = 0;
        for (const row of this.data) {
            totalColCount = Math.max(totalColCount, row.length);
        }

        const escapeMd = (str) => {
            return String(str ?? "")
                .replace(/\|/g, "\\|")
                .replace(/\n/g, " ");
        };

        // Add anchor and title as heading
        if (this.anchor) {
            output += `<a id="${this.anchor}"></a>\n\n`;
        }
        if (this.title) {
            if (this.titleLink) {
                output += `### ${this.title} [⬆](${this.titleLink})\n\n`;
            } else {
                output += `### ${this.title}\n\n`;
            }
        }

        // Header row
        if (this.data.length > 0 && this.hasHeader) {
            const headerRow = this.data[0];
            const headerCells = [];
            for (let i = 0; i < totalColCount; i++) {
                headerCells.push(escapeMd(headerRow[i] ?? ""));
            }
            output += "| " + headerCells.join(" | ") + " |\n";

            // Separator with alignment
            const separators = [];
            for (let i = 0; i < totalColCount; i++) {
                if (this.colClass[i] === "right") {
                    separators.push("---:");
                } else if (this.colClass[i] === "center") {
                    separators.push(":---:");
                } else {
                    separators.push("---");
                }
            }
            output += "| " + separators.join(" | ") + " |\n";
        }

        // Data rows
        const startRow = this.hasHeader ? 1 : 0;
        for (let rowNum = startRow; rowNum < this.data.length; rowNum++) {
            const row = this.data[rowNum];
            const cells = [];

            for (let i = 0; i < totalColCount; i++) {
                let cell;
                if (i >= row.length) {
                    cell = "";
                } else {
                    // Check for cell link
                    const linkKey = `${rowNum},${i}`;
                    if (this.cellLinks[linkKey]) {
                        const link = this.cellLinks[linkKey];
                        cell = `[${escapeMd(link.text)}](${link.href})`;
                    } else {
                        cell = escapeMd(row[i]);
                    }
                    // Wrap columns with "wrap" class in a span to allow wrapping
                    if (this.colClass[i] === "wrap" && cell) {
                        cell = `<span class="wrap">${cell}</span>`;
                    }
                }
                cells.push(cell);
            }
            output += "| " + cells.join(" | ") + " |\n";
        }

        // Footer as note
        if (this.footer) {
            output += `\n*${this.footer}*\n`;
        }

        output += "\n";
        return output;
    }
}
