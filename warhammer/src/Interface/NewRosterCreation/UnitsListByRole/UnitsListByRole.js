import React, {Component} from "react";
import "./UnitsListByRole.css";
import UnitProfile from "../UnitProfile/UnitProfile.js";
import GetFactionUnitsByRole from "../../../Scripts/GetFactionUnitsByRole.js";
import * as utils from "../../../Scripts/CommonFunctions.js";

class UnitsListByRole extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let AllowedAdding = !utils.CheckDetachmentOptionFull(this.props.Detachment.RosterUnits, this.props.UnitRole, this.props.Detachment.Detachment)
        let Units = utils.GetUnits(this.props.Faction.id, this.props.UnitRole.id);
        if(Units && (Units.length > 0)) {
            Units = Units.map(
                (unit) => 
                <div>
                    <UnitProfile key = {unit.id} Unit = {unit} UnitSelection = {true} handleUnitSelection = {this.props.handleUnitSelection} AllowedAdding = {AllowedAdding}/>
                </div>
            );
        }
        return (
            <div id = {"UnitListByRole"+this.props.UnitRole.Name}>
                <h2 className = "UnitsListByRole__Header">{this.props.UnitRole.Name}</h2>
                {Units}
            </div>

        );
    }
}

export default UnitsListByRole;
