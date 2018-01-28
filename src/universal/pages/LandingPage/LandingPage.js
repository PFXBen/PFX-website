import React, { Component } from 'react';
import marked from 'marked';

import readMe from '../../../../README.md';

class LandingPage extends Component {
    componentWillMount() {
        marked.setOptions({
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        });
    }

    render() {
        return(
            <div>
                <div className="markdown-body"
                    dangerouslySetInnerHTML={{__html: marked(readMe)}}
                />
            </div>
        );
    }
}

export default LandingPage;
