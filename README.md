This minimalistic project shows a method of disabling animations in visual regression tests.  
For this example, a single component is defined - `AnimatedComponent`.
`AnimatedComponent` contains a div with a text that "bounces" using a CSS animation.
`AnimatedComponent` has 2 modes - `fast` and `slow`.  

If we wish to test `AnimationComponent` for visual regressions with tools like `AppliTools`, we will have a problem: 
screenshots that are taken are not guaranteed to capture the element in the same position each time.  
The solution which is suggested here, is "disabling" the animations if we are in visual regression tests.  

The solution is composed from the following steps:
1. Define a CSS variable at the `:root`, with a name like `--animation-duration-multiplier`. Set it to 1 by default.
1. Multiply each `animation-duration` property with `--animation-duration-multiplier`. 
If you are using SCSS variables, this can easily achieved.
1. At the root of your visual regression tests runner, set `--animation-duration-multiplier` to 0. 
If you want, you can use an environment variable to conditionally change the CSS variable.
1. Run your tests. Animations now have a duration of 0.

The advantage of setting the duration to 0, compared to disabling the animations entirely, is that this way CSS properties 
that are updated by the animations still occur.  


### Running the example
First, install the dependencies by running:
```bash
npm install
```

#### SASS
The project contains `.scss` files which are not imported by webpack.  
you can configure IntelliJ (for example) to compile these files with a watcher.

#### Storybook
You can execute storybook by running:
```bash
npm run storybook
```

In order to run Storybook without the animations, run:
```bash
npm run storybook:without-animations
```  
This will run Storybook the same as before, but with the environment variable set: `STORYBOOK_APPLITOOLS_TESTS=true`.  

#### AppliTools
Before running any Applitools-related task, make sure you have the environment variable `APPLITOOLS_API_KEY`.  
In order to run Storybook+Applitools tests **with** animations, run:
```bash
npm run test:storybook
```  
This would run the visual-regression "as usual", with full animations.  

In order to run the tests without the animations, run:
```bash
npm run test:storybook:without-animations
```  
This will run the same tests as before, but with the environment variable set: `STORYBOOK_APPLITOOLS_TESTS=true`.  


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
