function PlaylistPageViewModel() {
    var self = this;
    self.playlists = ko.observableArray([]);
    self.cautaToken = ko.observable();

    self.init = function () {
        self.playlists(Repo.ContentItems.getAllPlaylists());
    }

    self.onCauta = function () {
        toastr.info('Cauta ....');
        console.log(self.cautaToken());
    }

    self.onEnter = function (model, event) {
        if (event.keyCode == 13) {
            debugger;
        }
        return true;
    }

    self.init();
}

ko.applyBindings(new PlaylistPageViewModel());