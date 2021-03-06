export function CategoryClick(CategiryId) {
    return {
        type: "CategoryClick",
        CategiryId: CategiryId
    }
}

export function FactionSelectionWindow(FlagValue) {
    return {
        type: "FactionSelectionWindow",
        FlagValue: FlagValue
    }
}

export function PsychicPowerMenuButtons(AvailableSpells, SelectedSpells, RemoveButtonLocked, AddButtonLocked) {
    return {
        type: "PsychicPowerMenuButtons",
        AvailableSpells: AvailableSpells,
        SelectedSpells: SelectedSpells,
        RemoveButtonLocked: RemoveButtonLocked,
        AddButtonLocked: AddButtonLocked
    }
}

export function UnitPsychicPowers(SelectedSpells, CurrentUnit) {
    return {
        type: "UnitPsychicPowers",
        SelectedSpells: SelectedSpells,
        CurrentUnit: CurrentUnit
    }
}

export function NewDetachment(Roster, ActiveDetachment) {
    return {
        type: "NewDetachment",
        Roster,
        ActiveDetachment
    }
}

export function CopyDetachment(DetachmentId, NewId) {
    return {
        type: "CopyDetachment",
        DetachmentId: DetachmentId,
        NewId: NewId
    }
}

export function DeleteDetachment(DetachmentId) {
    return {
        type: "DeleteDetachment",
        DetachmentId: DetachmentId
    }
}

export function AddNewUnit(DetachmentId, NewId, BaseUnit) {
    return {
        type: "AddNewUnit",
        DetachmentId: DetachmentId,
        NewId: NewId,
        BaseUnit: BaseUnit
    }
}
//Скорее всего не нужен
export function EditUnit(Unit) {
    return {
        type: "EditUnit",
        Unit: Unit
    }
}

export function CopyUnit(DetachmentId, UnitId, NewId) {
    return {
        type: "CopyUnit",
        DetachmentId: DetachmentId,
        UnitId: UnitId,
        NewId: NewId
    }
}

export function DeleteUnit(DetachmentId, UnitId) {
    return {
        type: "DeleteUnit",
        DetachmentId: DetachmentId,
        UnitId: UnitId
    }
}

export function RosterAction(ActionNAme) {
    return {
        type: "RosterAction",
        ActionNAme: ActionNAme
    }
}
/*
export function RosterName(RosterName) {
    return {
        type: "RosterName",
        RosterName: RosterName
    }
}

export function RosterMaxPL(RosterMaxPL) {
    return {
        type: "RosterMaxPL",
        RosterMaxPL: RosterMaxPL
    }
}

export function RosterMaxPTS(RosterMaxPTS) {
    return {
        type: "RosterMaxPTS",
        RosterMaxPTS: RosterMaxPTS
    }
}
*/
export function UpdateRoster(Roster) {
    return {
        type: "UpdateRoster",
        Roster
    }
}

export function ActiveUnit(ActiveUnit) {
    return {
        type: "ActiveUnit",
        ActiveUnit: ActiveUnit
    }
}

export function ActiveDetachment(ActiveDetachment) {
    return {
        type: "ActiveDetachment",
        ActiveDetachment: ActiveDetachment
    }
}


export function UpdateUnitModels(UnitModels) {
    return {
        UnitModels,
        type: "UpdateUnitModels"
    }
}

export function EditModelWargear(CurrentModel) {
    return {
        CurrentModel,
        type: "EditModelWargear"
    }
}

export function UpdateModelWargear(WargearSlots) {
    return {
        WargearSlots,
        type: "UpdateModelWargear"
    }
}

export function NewRoster(Roster) {
    return {
        type: "NewRoster",
        Roster: Roster
    }
}

export function SetUnitAsWarlord(WarlordCheckbox) {
    return {
        type: "SetUnitAsWarlord",
        WarlordCheckbox
    }
}


export function CurrentScrollCount(CurrentScrollCount) {
    return {
        type: "CurrentScrollCount",
        CurrentScrollCount
    }
}

export function SetUnitWarlordTrait(ChosenTrait) {
    return {
        type: "SetUnitWarlordTrait",
        ChosenTrait
    }
}

export function SetUnitRelic(ChosenRelic) {
    return {
        type: "SetUnitRelic",
        ChosenRelic
    }
}

export function SetDetachmentParameters(NewRoster,NeededDetachment) {
    return {
        type: "SetDetachmentParameters",
        NewRoster,
        NeededDetachment
    }
}

/*
export function SetLoading(isLoading) {
    return {
        type: "SetLoading",
        isLoading
    }
}
*/
export function SetRetrievedUnits(Units, Flag) {
    return {
        type: "SetRetrievedUnits",
        Units,
        Flag
    }
}

export function ASYNC_RetrieveUnits(FactionId) {
    return {
        type: "ASYNC_RetrieveUnits",
        FactionId
    }
}

export function ASYNC_RetrieveFactions() {
    return {
        type: "ASYNC_RetrieveFactions"
    }
}

export function SetRetrievedFactions(Factions, Flag) {
    return {
        type: "SetRetrievedFactions",
        Factions,
        Flag
    }
}

export function ASYNC_RetrieveDetachments() {
    return {
        type: "ASYNC_RetrieveDetachments"
    }
}

export function SetRetrievedDetachments(Detachments, Flag) {
    return {
        type: "SetRetrievedDetachments",
        Detachments,
        Flag
    }
}

export function ASYNC_RetrieveChapterTactics(FactionId) {
    return {
        type: "ASYNC_RetrieveChapterTactics",
        FactionId
    }
}

export function SetRetrievedChapterTactics(ChapterTactics, Flag) {
    return {
        type: "SetRetrievedChapterTactics",
        ChapterTactics,
        Flag
    }
}

export function ASYNC_REQUEST_FAILED(error) {
    return {
        type: "ASYNC_REQUEST_FAILED",
        error
    }
}

