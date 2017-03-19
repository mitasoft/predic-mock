function PlaylistPageViewModel() {
    var self = this;
    self.playlists = ko.observableArray([]);

    self.init = function() {
         self.playlists(Repo.ContentItems.getAllPlaylists());
    }

    self.init();
}

ko.applyBindings(new PlaylistPageViewModel());