import React, { Component } from 'react';
import DropdownButton from '../components/dropdown/DropdownButton';
import DropDownContainer from '../components/dropdown/DropDownContainer'
import _ from 'lodash';

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

        this.labelCollection = this.props.data;
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatedClick = this.handleCreatedClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleOpenCreateForm = this.handleOpenCreateForm.bind(this);
        this.handleCloseCreateForm = this.handleCloseCreateForm.bind(this);
        this.adjustItemHeight = this.adjustItemHeight.bind(this);
    }


    componentDidMount () {
        const arr = [];
        if (this.labelCollection.length > 0) {
            this.labelCollection.forEach(function(label){
                const Label = {
                    value: label,
                    checked: false
                };
                arr.push(Label)
            })
        }
        console.log('arr', arr);
        this.labelCollection = arr
        this.setState({hasLabels: true});
        this.setState({createLabelOpen: false})
    }

    handleClick () {
        if (this.state.isOpen === false) {
            this.setState({isOpen: true})
        } else {
            this.setState({isOpen: false})
        }
        this.setState({createLabelOpen: false})

        if (this.labelCollection.length > 0) {
            this.labelCollection.forEach(function(label){
                label.checked = false;
            })
        }
    }

    handleInputChange (event) {
        this.setState({value: event.target.value});
    }

    handleCreatedClick () {
        const Label = {
            value: this.state.value,
            checked: false
        };

        console.log('has dups', this.hasDuplicates(this.labelCollection));
        this.labelCollection.push(Label);
        this.labelCollection = _.uniqWith(this.labelCollection,  _.isEqual);
        this.setState({hasLabels: true});
        this.setState({createLabelOpen: false})
    }

    handleCheck (event, obj) {
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

    hasDuplicates(data) {
        return _.uniqWith(data,  _.isEqual)
    }

    render () {
        return (
            <div className="flex flex-mobile-column">
                <div className="tag-selection">
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
                    calculateDropdownHeight={this.adjustItemHeight}
                />
            </div>
                </div>
            </div>
        )
    }
}

export default LabelSelect
