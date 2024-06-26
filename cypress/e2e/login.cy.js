/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5174/');
  });

  it('should display login page correctly', () => {
    cy.visit('http://localhost:5174/');

    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

    it('should display alert when password is empty', () => {
      // mengisi email
      cy.get('input[placeholder="Email"]').type('forkus12@gmail.com');
   
      // klik tombol login tanpa mengisi password
      cy.get('button').contains(/^Masuk$/).click();
   
      // memverifikasi window.alert untuk menampilkan pesan dari API
      cy.on('window:alert', (str) => {
        expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // mengisi email
    cy.get('input[placeholder="Email"]').type('forkus12@gmail.com');
 
    // mengisi password yang salah
    cy.get('input[placeholder="Password"]').type('forkussalah');
 
    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();
 
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('hello@hello.com');
 
    // mengisi password
    cy.get('input[placeholder="Password"]').type('hello123');
 
    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();
 
    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('button').contains('Buat Thread').should('be.visible');
  });
});