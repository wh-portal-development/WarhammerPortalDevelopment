import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Header  from './Interface/Header/Header.js';
import MainMenu from './Interface/MainMenu/MainMenu.js';
import WorkingArea from './Interface/WorkingArea/WorkingArea.js';

import * as ActionCreators from "./Store/ActionsCreators.js";

class Warhammerportal extends Component {
    constructor(props) {
        super(props);
        this.selectMenuButton = this.selectMenuButton.bind(this);
        /*
        this.state = {
            SelectedMenuId : 1
        };
        */
    }

    selectMenuButton(ButtonId) {
        if(this.props.SelectedMenuId != ButtonId) {
            this.props.selectMenuButton(ButtonId);
        }
    }
    render() {
        return (
            <div style = {{height: "100%", width: "100%",position: "absolute", overflow: "auto", margin: "0px", Padding: "0px"}}>
                <Header />
                <MainMenu selectMenuButton = {this.selectMenuButton}/>
                <WorkingArea SelectedMenuId = {this.props.SelectedMenuId} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedMenuId: state.MainMenuCategoryKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectMenuButton: (ButtonId) => dispatch(ActionCreators.CategoryClick(ButtonId))
    }
}

const containerWorkingArea = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Warhammerportal);


export default containerWorkingArea;