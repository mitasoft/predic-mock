
function SyncPageViewModel() {
    var self = this;
    self.syncResults = ko.observableArray([]);
    self.pathToSync = ko.observable();

    self.onStartSyncClick = function() {
        toastr.info('Syncronization started');
    }

    self.onRefreshClick = function() {
        toastr.info('Refresh started');
    }

    self.onSavePathToSync = function() {
        toastr.info('Save started');
    }

    self.init = function() {
        self.pathToSync('pathToSync...');
        self.syncResults(Repo.ContentItems.getSyncResult());
        toastr.success('Status loaded');
    }

    self.init();
}

ko.applyBindings(new SyncPageViewModel());