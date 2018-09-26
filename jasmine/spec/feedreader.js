/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 //Help gotten from https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true
"use strict";
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length > 0).toBe(true);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined and are not empty', () => {
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length > 0).toBe(true);
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined and are not empty', () => {
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length > 0).toBe(true);
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu', () => {

        it('Menu is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('Menu changes visibility when clicked', () => {
            //Jasmine simulates the click action of the html page 
            //and check what happen when it is clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', () => {
        //loads the feed before testing the code
        beforeEach((done) => {
            loadFeed(0,done);
        });

        it('LoadFeed has at least one single entry and works properly', () => {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', () => {
        //Variables to help compare the two feeds
        let feedOne;
        let feedTwo;

        beforeEach(done => {
            loadFeed(0, () => {
                feedOne = $('.feed').html();
                done(); 
            });

            loadFeed(0, () => {
                feedTwo = $('.feed').html();
                done(); 
            });

        })

        it('Content changes when a new feed loads', () => {
            expect(feedOne === feedTwo).toBe(false);
        });
    });

}());
