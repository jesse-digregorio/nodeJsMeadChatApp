const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            { id: '1', name: 'Alpha', room: 'Node Course' },
            { id: '2', name: 'Beta', room: 'React Course' },
            { id: '3', name: 'Gamma', room: 'Node Course' }
        ];

    });


    it('should add new user', () => {
        //var users = new Users();
        var userToAdd = {
            id: '123',
            name: 'Marmalade',
            room: 'players'
        };
        var resUser = users.addUser(userToAdd.id, userToAdd.name, userToAdd.room);

        expect(users.users.length).toEqual(4);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toEqual(2);
    });

    it('should not remove a user', () => {
        var userId = '42';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toEqual(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toEqual(userId);
    });

    it('should not find a user', () => {
        var userId = '42';
        var user = users.getUser(userId);

        expect(user).toEqual(undefined);
    });


    it('should return user names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Alpha', 'Gamma']);
    });

    it('should return user names for reacy course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Beta']);
    });

});
