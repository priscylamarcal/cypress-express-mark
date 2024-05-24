import { faker } from '@faker-js/faker';

describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:3000');

        // utilizando com o faker
        // cy.get('input[placeholder="Add a new Task"]').type(
        //     faker.music.songName()
        // );

        cy.contains('button', 'Create').click();
    });
});
