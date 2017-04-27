import React, { Component } from 'react';
import DropdownButton from '../components/DropdownButton';
import DropDownContainer from '../components/DropDownContainer'

class LabelSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            createLabelOpen: false,
            hasValue: false,
            value: "",
            hasLabels: false,
            labelChecked: false
        };

        this.labelCollection = [];

        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatedClick = this.handleCreatedClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleOpenCreateForm = this.handleOpenCreateForm.bind(this);
        this.handleCloseCreateForm = this.handleCloseCreateForm.bind(this);
        this.adjustItemHeight = this.adjustItemHeight.bind(this);
    }


    handleClick () {
        if (this.state.isOpen === false) {
            this.setState({isOpen: true})
        } else {
            this.setState({isOpen: false})
        }
    }

    handleInputChange (event) {
        this.setState({value: event.target.value});
    }

    handleCreatedClick () {
        this.labelCollection.push(this.state.value);
        this.setState({hasLabels: true});
        this.handleCloseCreateForm();
    }

    handleCheck (event) {
        this.setState({labelChecked: event.target.checked});
    }

    handleOpenCreateForm () {
        this.setState({createLabelOpen: true})
        this.setState({value: ""})
    }

    handleCloseCreateForm () {
        this.setState({createLabelOpen: false})
    }

    adjustItemHeight (number) {
        return this.labelCollection.length * 30 + number;
    }

    render () {
        console.log(this.labelCollection);
        return (
            <div className="pe-proto dropdown">
                <DropdownButton
                    onClick={this.handleClick}
                />
                <DropDownContainer
                    isOpen={this.state.isOpen}
                    hasValue={this.state.hasValue}
                    hasLabels={this.state.hasLabels}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    labelCollection={this.labelCollection}
                    numberOfExistingLabels={this.labelCollection.length}
                    onClick={this.handleCreatedClick}
                    labelChecked={this.state.labelChecked}
                    onCheck={this.handleCheck}
                    createLabelOpen={this.state.createLabelOpen}
                    openCreateForm={this.handleOpenCreateForm}
                    closeCreateForm={this.handleCloseCreateForm}
                    calculateHeight={this.adjustItemHeight}
                />
            </div>
        )
    }
}

export default LabelSelect
