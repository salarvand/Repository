/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Repository.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Repository',
        languages: 'C#, Javascript',
        branchCount: '12',
        contributerCount: '5'    
    }

});