
Ext.define('Repository.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Repository.view.main.MainController',
        'Repository.view.main.MainModel',
//        'Ext.chart.PolarChart'
        
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        layout: 'vbox',
        maxWidth: 550,
        split: true,

        bodyPadding: '25 5 5 5',

        items: [{

            xtype: 'panel',
            itemId:'serachBox',
            layout: 'hbox',
            bodyPadding: '5 5 0',
            flex: 1,
            items: [
            {
                xtype: 'textfield',
                emptyText: 'Enter Git Repository Name',
                itemId: 'repositoryName',
                width: 500,
            },
            {
                xtype: 'button',
                text: 'Go',
                action:'go'
            }]
        }, {
            xtype: 'grid',
            width: '100%',
            height: 500,
            frame: false,
            itemId:'gridRepo',
            store: Ext.create('Ext.data.Store', {
                storeId: 'simpsonsStore',
                fields: ['Name', 'Owner', 'Homepage'],
                proxy: {
                    type: 'memory',
                    reader: {
                        type: 'json'
                    }
                }
            }),
            flex: 7,
            columns: [
            {
                text: 'Name',
                sortable: true,
                dataIndex: 'Name',
                width: 140
            }, {
                text: 'Owner',
                sortable: true,
                dataIndex: 'Owner',
                width: 110
            }, {
                text: 'Home Page',
                sortable: true,
                dataIndex: 'Homepage',
                flex: 1
            }]
        }]
    }, {
        region: 'center',
        layout: 'vbox',
        header: true,
        title: 'Tab 1',
        items: [{
                xtype: 'form',

                layout: {
                    type: 'vbox'
                },

                bodyPadding: 5,
                border: false,

                items: [{
                    xtype: 'label',
                    bind: {
                        text: 'Languages Repository : {languages}'
                    },
                    margin: '0 0 10 10'
                }, {
                    xtype: 'label',
                    bind: {
                        text: 'Branch Count : {branchCount}'
                    },
                    margin: '0 0 10 10'
                }, {
                    xtype: 'label',
                    bind: {
                        text: 'Contributor Count : {contributerCount}'
                    },
                    margin: '0 0 10 10'
                }]
            }, {
                xtype: 'pie',
                width: '100%',
                
            },
            {
                
            }
        ]
      }
    ]
});




