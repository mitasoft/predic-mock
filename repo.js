var Repo = Repo || {};

Repo.ContentItems = (function() {

    return {
        
        getContentItems: function() {
            return [
                new ContentItem(1, 'path 1'),
                new ContentItem(2, 'path 2'),
                new ContentItem(3, 'path 3'),
                new ContentItem(4, 'path 4'),
                new ContentItem(5, 'path 5'),
                new ContentItem(6, 'path 6'),
            ];
        }, 

        getSyncResult: function() {
            return [
                new SyncResult(1, 'today', 'status 1'),
                new SyncResult(2, 'today', 'status 2'),
                new SyncResult(3, 'today', 'status 3'),
                new SyncResult(4, 'today', 'status 4'),
                new SyncResult(5, 'today', 'status 5')
            ];
        }, 

        getAllPlaylists: function() {
            return [
                new Playlist(1, 'Playlist 1'),
                new Playlist(2, 'Playlist 2'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(3, 'Playlist 3'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(1, 'Playlist 1'),
                new Playlist(3, 'Playlist 3'),
            ]
        },

        getPlaylistById: function() {
            return new Playlist(1, 'Playlist 1', [
                new PlaylistItem(1, 'File 1'),
                new PlaylistItem(1, 'File 2'),
                new PlaylistItem(1, 'File 3'),
                new PlaylistItem(1, 'File 4'),
            ]);
        }
    };

})();

function ContentItem(id, fullPath) {
    this.id = id;
    this.fullPath = fullPath;
}

function PlaylistItem(id, fullPath) {
    this.id = id;
    this.fullPath = fullPath;
}

function Playlist(id, name, items) {
    this.id = id, 
    this.name = name, 
    this.items = items;
}

function SyncResult(id, data, status) {
    this.id = id;
    this.data = data;
    this.status = status;
}