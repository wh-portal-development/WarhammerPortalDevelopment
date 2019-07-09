import React, {Component} from "react";
import "./WargearSelection.css";
import WargearElement from "./WargearElement/WargearElement.js"
import * as ActionCreators from "../../../Store/ActionsCreators.js";
import * as utils from "../../../Scripts/CommonFunctions.js";
import { connect } from 'react-redux';
/*
in:
RosterModels
CurrentModel
UpdateSelectedWargearOptions()

out:
this.WargearSlots
*/

class WargearSelection extends Component {
    constructor(props) {
        super(props);
        this.GetSelectedUnitOptions = this.GetSelectedUnitOptions.bind(this);
        this.WargearSlots = [];
        this.UnitIsWarlord = false;
    }
    
    SelectedWargearOption = (SelectedOptionId, CurrentSlot) => {
        CurrentSlot.SelectedOption = CurrentSlot.BaseSlot.Options.filter(option => option.id == SelectedOptionId)[0];
        this.props.UpdateSelectedWargearOptions(this.WargearSlots);
    }
    
    GetAvailableOptions = (CurrentSlot, UnitSelectedOptions, CurrentModel) => {
        let AvailableOptions = [CurrentSlot.SelectedOption];
        let BaseOptions = CurrentSlot.BaseSlot.Options;
        let ModelSelectedOptions = [];
        let AllSelectedOptions = UnitSelectedOptions;
        let couldBeIncluded = true;

        if (!!CurrentModel.RosterWargearSlots && CurrentModel.RosterWargearSlots.length > 0) {
            for (let i = 0; i < CurrentModel.RosterWargearSlots.length; i++) {
                ModelSelectedOptions.push(CurrentModel.RosterWargearSlots[i].SelectedOption);
            }
        }
        
        for (let i = 0; i < BaseOptions.length; i++) {
            let HasLinkedOptions = !!BaseOptions[i].LinkedOptionsId && BaseOptions[i].LinkedOptionsId.length > 0;
            let UnitAlreadyHave = AllSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;

            if (!!BaseOptions[i].PerXmodels) {
                let CanCarry = this.props.RosterModels.length / BaseOptions[i].PerXmodels;
                couldBeIncluded = couldBeIncluded && (CanCarry > UnitAlreadyHave);
            }

            if (!!BaseOptions[i].UpToXModels) {
                couldBeIncluded = couldBeIncluded && (BaseOptions[i].UpToXModels > UnitAlreadyHave);
            }

            if (!!BaseOptions[i].CountPerModel) {
                let ModelAlreadyHave = ModelSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                couldBeIncluded = couldBeIncluded && (ModelAlreadyHave < BaseOptions[i].CountPerModel);
            }

            if (couldBeIncluded && BaseOptions[i] != CurrentSlot.SelectedOption) {
                AvailableOptions.push(BaseOptions[i]);
            }
        }
        return AvailableOptions;
    }

    GetSelectedUnitOptions = (RosterModels) => {
        let AllSelectedOptions = [];
        if (!!RosterModels && RosterModels.length > 0) {
            for (let i = 0; i < RosterModels.length; i++) {
                let Slots = RosterModels[i].RosterWargearSlots;
                if (!!Slots && Slots.length > 0) {
                    for (let j = 0; j < Slots.length; j++) {
                        if (!!Slots[j].SelectedOption) {
                            AllSelectedOptions.push(Slots[j].SelectedOption);
                        }
                    }
                }
            }
        }
        return AllSelectedOptions;
    }

    HandleEvent = () => {
        this.props.SetUnitAsWarlord(!this.UnitIsWarlord);
    }

    SelectedWarlordTrait = () => {
        
    }

    render() {
        this.UnitIsWarlord = this.props.ActiveUnit.Warlord;
        let WarlordOptions = null;

        if (this.props.ActiveUnit.BaseUnit.UnitRole.id == 3) {
            let AvailableWarlordTraits = utils.GetWarlordTraits(28, null).map(
                (option) =>
                <option className = "" key = {option.id} value = {option.id} disabled = {option.id == this.props.ActiveUnit.ChosenWarlordTrait.id}>{option.Name}</option>
            );

            WarlordOptions = 
            <div>
                <h3 className = 'WargearSelection__Title'>Additional options</h3>
                <p className = 'WargearSelection__CheckBox'><input type = 'checkbox' name = 'WarlordCheckBox' checked = {this.UnitIsWarlord ? 'checked' : ''} onChange = {this.HandleEvent}></input>This unit is a Warlord</p>
                <select className = "" value = {this.props.ActiveUnit.ChosenWarlordTrait.id} onChange = {this.SelectedWarlordTrait}>{AvailableWarlordTraits}</select>
            </div>
        }
        
        this.WargearSlots = this.props.CurrentModel.RosterWargearSlots.slice();
        const UnitSelectedOptions = this.GetSelectedUnitOptions(this.props.RosterModels);
        const RosterWargearSlots = this.WargearSlots.map(
            (slot) => 
                <WargearElement  key = {slot.id} CurrentSlot = {slot} AvailableOptions = {this.GetAvailableOptions(slot, UnitSelectedOptions, this.props.CurrentModel)} SelectedWargearOption = {this.SelectedWargearOption} SelectedOption = {slot.SelectedOption}/>
            );
        return (
            <div className = 'WargearSelection__Component'>
                <h3 className = 'WargearSelection__Title'>{this.props.CurrentModel.BaseModel.Name} - Wargear options</h3>
                <ul className = 'WargearSelection__List'>{RosterWargearSlots}</ul>
                {WarlordOptions}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        CurrentModel: state.RosterEditing.ActiveModel,
        RosterModels: state.RosterEditing.ActiveUnit.Models,
        ActiveUnit : state.RosterEditing.ActiveUnit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        UpdateSelectedWargearOptions: (WargearSlots) => dispatch(ActionCreators.UpdateModelWargear(WargearSlots)),
        SetUnitAsWarlord: (WarlordCheckBox) => dispatch(ActionCreators.SetUnitAsWarlord(WarlordCheckBox))
    }
}

const containerWargearSelection = connect(
    mapStateToProps,
    mapDispatchToProps
  )(WargearSelection);

export default containerWargearSelection;