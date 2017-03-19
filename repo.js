var Repo = Repo || {};

Repo.ContentItems = (function() {

    return {
        
        getContentItems: function() {
            return [
                { id: 1, fullPath: 'path1/subpath1/subpath2' },
                { id: 2, fullPath: 'path1/subpath1/subpath2' },
                { id: 3, fullPath: 'path1/subpath1/subpath2' },
                { id: 4, fullPath: 'path1/subpath1/subpath2' },
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
        }
    };

})();

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