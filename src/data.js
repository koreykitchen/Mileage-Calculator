import React from 'react';

import XLSX from 'xlsx';

import Main from './main.js';

class Data extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {storeData: [], loaded: false};

        this.getListOfStores(this.populateSelect, this);
    }

    render()
    {
        if(!this.state.loaded)
        {
            return (<h3>LOADING...</h3>);
        }

        else
        {
            return (<Main data={this.state.storeData} />);
        }
    }

    getListOfStores(callback, dataClass)
    {
        /* set up an async GET request */
        var req = new XMLHttpRequest();

        req.open("GET", "StoreList.xlsx", true);

        req.responseType = "arraybuffer";

        req.onload = function() 
        {
            callback(req.response, dataClass);
        };

        req.send();
    }

    populateSelect(result, dataClass)
    {
        /* parse the data when it is received */
        var data = new Uint8Array(result);

        var workbook = XLSX.read(data, {type:"array"});

        /* DO SOMETHING WITH workbook HERE */
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];

        var jsonData = XLSX.utils.sheet_to_json(first_worksheet, {blankrows:false});

        jsonData = jsonData.filter(store => (store.Name));

        jsonData = jsonData.sort((a, b) =>
                                    {
                                        var storeA = a.Name.toUpperCase();
                                        var storeB = b.Name.toUpperCase();

                                        var comparison = 0;

                                        if (storeA > storeB) 
                                        {
                                            comparison = 1;
                                        } 

                                        else if (storeA < storeB) 
                                        {
                                            comparison = -1;
                                        }

                                        return comparison;
                                    }
                                );

        dataClass.setState({storeData: jsonData, loaded: true}); //console.log(jsonData);

        /*
        dataClass.state.storeData = jsonData;
        dataClass.state.loaded = true;

        */

        
    }
}

export default Data;

