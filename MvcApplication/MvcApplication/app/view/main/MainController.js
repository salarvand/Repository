window.Tosan = {};

(function (cr) {
    var records = [];
    var languageStr = '';
    var branchCount = '';
    var contributerCount = '';

    cr.languageStr = languageStr;
    cr.records = records;
    cr.branchCount = branchCount;
    cr.contributerCount = contributerCount;

}(window.Tosan));

//////////////////////////////////////////////////////

Ext.define('Repository.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Repository.view.main.MainModel'
    ],

    alias: 'controller.main',

    config: {
        control: {
            '#serachBox button[action=go]': {
                click: 'onClickButton'
            },

            '#gridRepo': {
                itemclick: 'onGirdItemClick'
            }
        }
    },
    
    onGirdItemClick : function(thisgrid, record, item, index, e, eOpts) {
       
        Ext.Ajax.request({
            url: '/api/languages',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: {
                name: record.getData().Name,
                owner: record.getData().Owner
            },
            success: function(conn, response, options, eOpts) {

                console.log(conn.responseText);

                Ext.each(Ext.decode(conn.responseText), function (repo) {
                    Tosan.records.push({
                        Name: repo.Name
                    });
                });

            },
            failure: function(conn, response, options, eOpts) {

            }
        });
        ////////////////////////////////////////////////////////
        Ext.Ajax.request({
            url: '/api/branchCount',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: {
                name: record.getData().Name,
                owner: record.getData().Owner
            },
            success: function (conn, response, options, eOpts) {

                console.log(conn.responseText);

                Tosan.branchCount = Ext.decode(conn.responseText);
                console.log(Tosan.branchCount);
            },
            failure: function (conn, response, options, eOpts) {

            }
        });
        /////////////////////////////////////////////////////////
        Ext.Ajax.request({
            url: '/api/contributerCount',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: {
                name: record.getData().Name,
                owner: record.getData().Owner
            },
            success: function (conn, response, options, eOpts) {

                console.log(conn.responseText);

                Tosan.contributerCount = Ext.decode(conn.responseText);
                console.log(Tosan.contributerCount);
            },
            failure: function (conn, response, options, eOpts) {

            }
        });


        Tosan.languageStr = '';
        Ext.each(Tosan.records, function (lang) {
            Tosan.languageStr += lang.Name + ' - ';
        });
 
        var viewmodel = this.getView().getViewModel();
        viewmodel.set('languages', Tosan.languageStr);
        Tosan.records = [];
        Tosan.languageStr = '';

        viewmodel.set('branchCount', Tosan.branchCount);
        viewmodel.set('contributerCount', Tosan.contributerCount);

        Tosan.branchCount = '';
        Tosan.contributerCount = '';

////////////////////////////////////////////////////////////////////////////

        Ext.Ajax.request({
            url: '/api/contributerCommit',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: {
                name: record.getData().Name,
                owner: record.getData().Owner
            },
            success: function(conn, response, options, eOpts) {

                var records = [];

                console.log(conn.responseText);

                Ext.each(Ext.decode(conn.responseText), function(repo) {
                    records.push({
                        name: repo.Author.Login,
                        data1: repo.Total
                        
                    });
                });
               
                var pchart = Ext.ComponentQuery.query('#pchart')[0];
                pchart.store.loadData(records);
                pchart.redraw();
            },
            failure: function(conn, response, options, eOpts) {

            }
        });

    },

    onClickButton: function () {

        var repoName = Ext.ComponentQuery.query('#repositoryName')[0];

        if (repoName.value) {
           
            Ext.Ajax.request({
                url: '/api/values',
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                params: {
                    name: repoName.value
                },
                success: function (conn, response, options, eOpts) {

                    var records = [];

                    console.log(conn.responseText);

                    Ext.each(Ext.decode(conn.responseText), function (repo) {
                        records.push({
                            Name: repo.Name,
                            Owner: repo.Owner.Login,
                            Homepage: repo.Homepage
                        });
                    });
                    
                    var gridRepo = Ext.ComponentQuery.query('#gridRepo')[0];
                    gridRepo.getStore().removeAll();
                    
                    gridRepo.getStore().loadData(records);
                
                },
                failure: function (conn, response, options, eOpts) {
                    
                }
            });

        }
    }
  
});
