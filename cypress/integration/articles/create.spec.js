describe('Create article', () => {
  beforeEach(() => {
    cy.server(); // enable response stubbing
    cy.visit('/login');
    cy.route({
      method: 'POST', // Route all POST requests
      url: '/api/auth/login', // that have a URL that matches '/users/*'
      status: 200,
      response: {
        user: {
          email: 'hadad.bwenge@gmail.com',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwidXNlcm5hbWUiOiJoYWRhZCIsImVtYWlsIjoiaGFkYWQuYndlbmdlQGdtYWlsLmNvbSIsInJvbGVJZCI6MSwiaWF0IjoxNTYxNTQyMjAzLCJleHAiOjE1NjE4MDE0MDN9.NWVdYCJJFkhqKUXataHQB8b1ZIV2BoJGkY4uYmFF0vQ',
          username: 'hadad',
          bio: null,
          image:
            'https://res.cloudinary.com/dutstern8/image/upload/v1561470328/fz5uv8apunsaqlabwwhy.png',
        },
      }, // and force the response to be: []
    });
    cy.get('input[name="email"]').type('hadad.bwenge@gmail.com');
    cy.get('input[name="password"]').type('Hadad12@');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/');
  });
  it('should create an article and redirect to the single page', () => {
    cy.visit('/articles/new');
    cy.route({
      method: 'POST', // Route all POST requests
      url: '/api/articles', // that have a URL that matches '/users/*'
      status: 200,
      response: {
        data: {
          article: {
            id: 109,
            slug: 'sdjaklsdsa-132141825',
            title: 'sdjaklsdsa',
            description: 'hello skdjsjd',
            body: '"<p class=\\"md-block-unstyled\\">I am typing</p>"',
            images: null,
            reads: 19,
            favorited: false,
            favoritesCount: 0,
            active: true,
            userId: 9,
            createdAt: '2019-06-25T15:10:05.903Z',
            updatedAt: '2019-06-25T18:57:04.689Z',
            User: {
              username: 'hadad',
              firstname: 'hadad',
              lastname: 'Bwenge',
              email: 'hadad.bwenge@gmail.com',
              image:
                'https://res.cloudinary.com/dutstern8/image/upload/v1561470328/fz5uv8apunsaqlabwwhy.png',
            },
            Tags: [],
            Ratings: [],
            readTime: 'Less than a minute',
          },
        },
      }, // and force the response to be: []
    });
    cy.route({
      method: 'GET', // Route all POST requests
      url: '/api/articles/:slug', // that have a URL that matches '/users/*'
      status: 200,
      response: {
        data: {
          article: {
            id: 109,
            slug: 'sdjaklsdsa-132141825',
            title: 'sdjaklsdsa',
            description: 'hello skdjsjd',
            body: '"<p class=\\"md-block-unstyled\\">I am typing</p>"',
            images: null,
            reads: 19,
            favorited: false,
            favoritesCount: 0,
            active: true,
            userId: 9,
            createdAt: '2019-06-25T15:10:05.903Z',
            updatedAt: '2019-06-25T18:57:04.689Z',
            User: {
              username: 'hadad',
              firstname: 'hadad',
              lastname: 'Bwenge',
              email: 'hadad.bwenge@gmail.com',
              image:
                'https://res.cloudinary.com/dutstern8/image/upload/v1561470328/fz5uv8apunsaqlabwwhy.png',
            },
            Tags: [],
            Ratings: [],
            readTime: 'Less than a minute',
          },
        },
      }, // and force the response to be: []
    });
    cy.get('input[name="title"]').type('Hello world');
    cy.get('[contenteditable]')
      .eq(0)
      .type('I am typing');
    cy.get('form').submit();
    cy.location('pathname').should('eq', '/articles/sdjaklsdsa-132141825');
  });
});