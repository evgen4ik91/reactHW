import React from 'react';
import './footer.sass';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return  (<footer className="footer">
                    <div className="container">
                        <h4 className="footer__title">NETFLIXroulette</h4>
                    </div>
              </footer>)
    }
}