import React from 'react';
import { SearchSelector } from '../search-selector/search-selector'
import './search-panel.sass';

export class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        }
        this.updateSearchStr = this.updateSearchStr.bind(this);
    }

    updateSearchStr(e) {
        this.setState({
            searchStr: e.target.value
        })
    }

    render() {
      return  (<div className="search">
                    <p className="search__title">Find your movie</p>
                    <input className="search__field" onKeyUp={this.updateSearchStr} />
                    <div className="row align justify">
                        <div className="col">
                            <SearchSelector/>
                        </div>
                        <div className="col">
                            <button className="btn-main lg">Submit</button>
                        </div>
                    </div>
              </div>)
    }
}