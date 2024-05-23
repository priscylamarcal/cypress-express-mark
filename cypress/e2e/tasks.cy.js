describe('tarefas', () => {
    it('Deve cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:3000');

        cy.get('input[placeholder="Add a new Task"]').type(
            'Ler um livro de node.js'
        );

        cy.contains('button', 'Create').click();
    });
});
