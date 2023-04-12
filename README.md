## Devise configuration
```bash
  Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"
     
     * Not required for API-only Applications *

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
       
     * Not required *
```

## Resources
- https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/apartment-app/apartment-app.md
- https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/apartment-app/react-in-rails.md
- React routes https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/cat-tinder/frontend/intro.md
- Rails routes 
- mock data  
- remember to give an id, https://github.com/learn-academy-2022-hotel/apartment-app-instructors/blob/main/app/javascript/components/mockApartments.js
- Adding react testing library https://dev.to/ivadyhabimana/setup-jest-and-react-testing-library-in-a-react-project-a-step-by-step-guide-1mf0
  - $ yarn add --dev @testing-library/react @testing-library/jest-dom
  - $ yarn add --dev jest jest-environment-jsdom
- Adding eslint  https://eslint.org/docs/latest/use/getting-started
- $ npm init @eslint/config
  - $ yarn add --dev eslint
  - $ yarn add --dev eslint-plugin-jest
  - $ yarn add --dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-n
  - in the package.json, add the following scripts
- Adding standard rb
  - Install Standard by adding it to your Gemfile and running bundle install:
  `gem 'standardrb', '~> 1.0'`
  - Run `standardrb` to check for errors 
  - Run `standardrb --fix` to fix errors
  - Run `yarn lint .`

```json
  scripts:{
    "test": "jest",
    "coverage": "jest --coverage",
    "lint": "eslint . --fix --max-warnings=0"
  }
```