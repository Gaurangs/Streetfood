import { AddRoleModule } from './addrole.module';

describe('AddRoleModule', () => {
    let addRoleModule: AddRoleModule;

    beforeEach(() => {
        addRoleModule = new AddRoleModule();
    });

    it('should create an instance', () => {
        expect(addRoleModule).toBeTruthy();
    });
});
