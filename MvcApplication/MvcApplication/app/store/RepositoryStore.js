//Ext.create('Ext.data.Store', {
//    storeId: 'RepositoryStore',
//
//    requires: [
//        'Repository.model.*'
//    ],
//
//    model: 'RepositoryModel',
//
//    fields: ['Name', 'Owner', 'HomePage'],
//
//    data: {
//        'items': [
//            { 'Name': 'Lisa', "Owner": "lisa@simpsons.com", "HomePage": "555-111-1224" }
//            
//        ]
//    },
//
//    proxy: {
//        type: 'memory',
//        reader: {
//            type: 'json',
//            rootProperty: 'items'
//        }
//    }
//
////    proxy: {
////        type: 'rest',
////        url: '/api/values',
////
////        listeners: {
////            exception: function (proxy, response, operation) {
////                Ext.MessageBox.show({
////                    title: 'REMOTE EXCEPTION',
////                    msg: operation.getError(),
////                    icon: Ext.MessageBox.ERROR,
////                    buttons: Ext.Msg.OK
////                });
////            }
////        }
////    }
//});