# Translations from Japanese in the Jupiter XML files

## Table of Contents

- [db_bmc0.xml](#db_bmc0xml)
- [db_bmc0_jd800.xml](#db_bmc0_jd800xml)
- [db_bmc0_jpX.xml](#db_bmc0_jpxxml)
- [db_bmc0_model.xml](#db_bmc0_modelxml)
- [db_bmc0_model_asgn.xml](#db_bmc0_model_asgnxml)
- [db_bmc0_surface.xml](#db_bmc0_surfacexml)
- [db_bmc0_surface_asgn.xml](#db_bmc0_surface_asgnxml)
- [db_bmc0_vd.xml](#db_bmc0_vdxml)
- [db_muse_cho.xml](#db_muse_choxml)
- [db_muse_ifx.xml](#db_muse_ifxxml)
- [db_muse_mfx.xml](#db_muse_mfxxml)
- [db_muse_rev.xml](#db_muse_revxml)
- [db_muse_voc.xml](#db_muse_vocxml)
- [db_muse_vtw.xml](#db_muse_vtwxml)

---

## db_bmc0.xml

### Comment 1 Lines 7-9
Symbols defined with numdef can be used in array, min/max/init.

### Comment 2 Lines 47-50
Create a structure for UserTone: a container of sizeOfUserToneBlock(bytes) x numOfUserToneBlock
Only supports bulk send/receive.

### Comment 3 Lines 54-64
Definition of groups and concrete entities. SysEx address assignment.
Items defined in groups can be used in concrete definitions. The same structures are used.
Groups cannot be used from groups.
concrete->group->block or concrete->block
Concrete entities require absolute SysEx address assignment.
Each block requires address size specification on SysEx.
For future expansion and address assignment organization, empty space allocation can be done using padding and offset.
SysEx addresses/sizes are written as hexadecimal numbers connected with "." like "00.00.00".
When specifying members, specifying a size with array makes it an array.

### Comment 4 Lines 99-99
Storage_UserPerf no longer fits in one sysex address area, so a separate interface was prepared.

### Comment 5 Lines 235-235
When making changes, make the same changes to "PerfMirror" below.

### Comment 6 Lines 254-254
This is just "Perf" above with mirror added.

### Comment 7 Lines 314-331
Block definition
Describe parameters that are expanded by PrmID.
Specify id name and min/max, init.
init can be omitted. If omitted, 0 or the minimum value between min/max is assigned.
By making it a subblock, one level can be grouped together, and the generated structure will contain one level of structure.
Arrays can be specified for param and subblock using array.
If read_only="true" is set on a parameter, writes via sysex are ignored.
Strings defined with numdef can be used in init/min/max/array.
For init/min/max, in addition to numdef definitions, differential values like "hogeSize-1" can also be written.
Parameters must be aligned to 4-byte boundaries.
Adjust using padding.
Padding is also used when you want to leave gaps for future expansion.
Using sysex_end makes parameters after that point in the block inaccessible from SysEx.
sysex_end cannot be used within subblocks.

### Comment 8 Lines 339-339
Parameters visible to SysEx, up to here.

### Comment 9 Lines 483-483
Parameters visible to SysEx, up to here.

### Comment 10 Lines 571-571
Parameters visible to SysEx, up to here.

### Comment 11 Lines 1068-1068
Make the same structure up to PHRASE in PCMT_CMN.

---

## db_bmc0_jd800.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

---

## db_bmc0_jpX.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

---

## db_bmc0_model.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 7-7
Reserved as uint16.

### Comment 3 Lines 9-11
Model Core Parameter Interface and actual definition.

### Comment 4 Lines 125-129
Actual Model Core Parameter.
Access is private via MDLSYN0 (both SysEx and internal access)
Same content as MDLSYN0 except for TYPE.

### Comment 5 Lines 125-129
Make the same structure as MDLSYN0.

---

## db_bmc0_model_asgn.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 22-29
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...

---

## db_bmc0_surface.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 10-17
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...

### Comment 3 Lines 457-460
model surface is a virtual parameter and is not shown from SysEx either.

### Comment 4 Lines 513-617
Define the corresponding Model Core Parameter and its value.

### Comment 5 Lines ?-?
Hardware panel-specific behavior.

### Comment 6 Lines 513-617
Define the corresponding Model Core Parameter and its value.

### Comment 7 Lines ?-?
Hardware panel-specific behavior.

### Comment 8 Lines 513-617
Define the corresponding Model Core Parameter and its value.

### Comment 9 Lines ?-?
Hardware panel-specific behavior.

### Comment 10 Lines 513-617
Define the corresponding Model Core Parameter and its value.

### Comment 11 Lines ?-?
Hardware panel-specific behavior.

### Comment 12 Lines 513-617
Define the corresponding Model Core Parameter and its value.

### Comment 13 Lines ?-?
Hardware panel-specific behavior.

### Comment 14 Lines 457-460
Below, models that do not use Model Core Parameter
Since there is no Model Core <-> Surface conversion, only hardware panel operations are needed.

### Comment 15 Lines 513-617
All Model Core Parameter parameters (copy and use this).

---

## db_bmc0_surface_asgn.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines ?-?
Since this is temporary for model panel assignment per part, the size doesn't need to match the model exactly. Some margin has been added. If set to an even number, padding is not needed.

---

## db_bmc0_vd.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

---

## db_muse_cho.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 9-13
Parameter ranges have been changed for KY022 Core0.
level: changed to 0-127
REV_SEND: changed to 0 - 127

### Comment 3 Lines 15-22
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...

---

## db_muse_ifx.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 10-18
unionbaseblock definition used in IFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...
# is IFXControl Parameter

---

## db_muse_mfx.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 10-18
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...
# is MFXControl Parameter

---

## db_muse_rev.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 9-12
Parameter ranges have been changed for KY022 Core0.
level: changed to 0-127

### Comment 3 Lines 13-20
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...

---

## db_muse_voc.xml

### Comment 1 Lines 5-5
db_partial can define block and unionblock.

### Comment 2 Lines 9-16
unionbaseblock definition used in MFX, etc.
Parts that use the same parameters like type are common.
Parts that share memory areas are written in share.
Parameters that are actually shared between share and union are written in alternate.
Since share/alternate areas use share as representative via SysEx, set min/max values to be wider.
Write definitions for each area in the order: common, share, alternate, alternate...

---

## db_muse_vtw.xml

### Comment 1 Lines 15-15
Separator for System Exclusive Map output.

### Comment 2 Lines 15-15
Separator for System Exclusive Map output.

### Comment 3 Lines 15-15
Separator for System Exclusive Map output.

### Comment 4 Lines 15-15
Separator for System Exclusive Map output.

### Comment 5 Lines 15-15
Separator for System Exclusive Map output.

### Comment 6 Lines 15-15
Separator for System Exclusive Map output.

### Comment 7 Lines 15-15
Separator for System Exclusive Map output.
