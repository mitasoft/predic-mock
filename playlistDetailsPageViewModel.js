function PlaylistDetailsPageViewModel() {
    var self = this;

    self.playlist = ko.observable();
    self.contentItems = ko.observableArray();
    self.contentItemsToken = ko.observable();

    self.init = function () {
        self.playlist(Repo.ContentItems.getPlaylistById());

        Repo.ContentItems.getContentItems().forEach(function (value) {
            self.contentItems.push(value);
        });
    }

    self.onSearchContentItems = function(model, event) {
        console.log('search clicked ' + model.contentItemsToken());
    }

    self.onEnterContentItems = function(model, event) {
        if(event.keyCode == 13) {
            console.log('search on enter with ' + self.contentItemsToken());
            self.contentItemsToken('');
        }

        return true;
    }

    self.onAdaugaInPlaylist = function(item) {
        console.log(item);
    }

    self.removeFromPlaylist = function(item) {
        console.log(item);
    }

    self.init();
}

ko.applyBindings(new PlaylistDetailsPageViewModel());

