import { UserRoleModule } from './userrole.module';

describe('UserRoleModule', () => {
    let userRoleModule: UserRoleModule;

    beforeEach(() => {
        userRoleModule = new UserRoleModule();
    });

    it('should create an instance', () => {
        expect(userRoleModule).toBeTruthy();
    });
});
