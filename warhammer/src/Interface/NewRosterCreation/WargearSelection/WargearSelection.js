import React, {Component} from "react";
import "./WargearSelection.css";
import WargearElement from "./WargearElement/WargearElement.js"
import * as ActionCreators from "../../../Store/ActionsCreators.js";
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
            if (!!BaseOptions[i].PerXmodels) {
                let AlreadyHave = AllSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                let CanCarry = this.props.RosterModels.length / BaseOptions[i].PerXmodels;
                
                couldBeIncluded = (CanCarry > AlreadyHave);
            }

            if (!!BaseOptions[i].CountPerModel) {
                let alreadyHave = ModelSelectedOptions.filter(option => (option.id == BaseOptions[i].id) || (HasLinkedOptions && BaseOptions[i].LinkedOptionsId.indexOf(option.id) != -1)).length;
                
                couldBeIncluded = (alreadyHave < BaseOptions[i].CountPerModel);
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

    HandleEvent = (e) => {
        let name = e.target.value;
        console.log(name);
        switch (name) {
            case "WarlordCheckBox":
            
            this.props.SetUnitAsWarlord(e.target.value);
            break;
        }
    }

    render() {
        let WarlordOptions = null;
        //if (this.props.ActiveUnit.BaseUnit.UnitRole.id == 3) {
            WarlordOptions = 
            <div>
                <h3 className = 'WargearSelection__Title'>Additional options</h3>
                <p><input type = 'checkbox' name = 'WarlordCheckBox' value = {this.props.ActiveUnit.Warlord} onChange = {this.HandleEvent}></input>This unit is a Warlord</p>

            </div>
        //}
        
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