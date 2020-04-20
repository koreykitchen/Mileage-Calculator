import React from 'react';

import XLSX from 'xlsx';

import Main from './main.js';

class Data extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { storeListData: [], dataHasBeenLoaded: false }; 
    }

    componentDidMount()
    {
        this.getStoreListData(this.callbackFunctionToStoreData, this);
    }

    render()
    {
        if(!this.state.dataHasBeenLoaded)
        {
            return (<h1 style={{textAlign: 'center', padding: '100px'}}>LOADING...</h1>);
        }

        else
        {
            return (<Main storeListData={this.state.storeListData} />);
        }
    }

    getStoreListData(callbackFunction, dataClassObject)
    {
        var request = new XMLHttpRequest();

        request.open("GET", "https://koreykitchen.github.io/Mileage-Calculator/StoreList.xlsx", true);

        request.responseType = "arraybuffer";

        request.onload = function() 
        {
            callbackFunction(request.response, dataClassObject);
        };

        request.send();
    }

    callbackFunctionToStoreData(dataToStore, dataClassObject)
    {
        var rawData = new Uint8Array(dataToStore);

        var workbook = XLSX.read(rawData, {type:"array"});

        var worksheet = workbook.Sheets[workbook.SheetNames[0]];

        var jsonStoreListData = XLSX.utils.sheet_to_json(worksheet, {blankrows:false});

        jsonStoreListData = jsonStoreListData.filter(storeObject => (storeObject.Name));

        jsonStoreListData = jsonStoreListData.sort((firstStore, secondStore) =>
                                    {
                                        var firstStoreName = firstStore.Name.toUpperCase();
                                        var secondStoreName = secondStore.Name.toUpperCase();

                                        var comparison = 0;

                                        if (firstStoreName > secondStoreName) 
                                        {
                                            comparison = 1;
                                        } 

                                        else if (firstStoreName < secondStoreName) 
                                        {
                                            comparison = -1;
                                        }

                                        return comparison;
                                    }
                                );

        dataClassObject.setState({ storeListData: jsonStoreListData, dataHasBeenLoaded: true });
    }
}

export default Data;

