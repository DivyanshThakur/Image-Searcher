import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    state = {term: ''};

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <label htmlFor="search">Image Search</label>
                    <input type="text" id="search" value={this.state.term} placeHolder="Enter a word" onChange={e => this.setState({term: e.target.value})} />
                </form>
            </div>
        );
    }
}

export default SearchBar;