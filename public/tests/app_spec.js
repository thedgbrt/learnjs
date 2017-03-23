describe('LearnJS', function() {
    it('can show a problem view', function() {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
    });
    it('can show the landing page when there is no hash', function() {
        learnjs.showView("");
        expect($('.view-container .landing-view').length).toEqual(1);
    });
    it('passes the hash view parameter to the view function', function() {
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });
    
    describe('Problem View', function() {
        it('has a title that includes the problem number', function() {
            var view = learnjs.problemView('1');
            expect(view.find('.title').text()).toEqual('Problem #1');  
        });
        it('has a description', function() {
            var view = learnjs.problemView('1');
            expect(view.find('[data-name="description"]').text()).toBeTruthy();
        });
        it('has a code block', function() {
            var view = learnjs.problemView('1');
            expect(view.find('[data-name="code"]').text()).toBeTruthy();
        });
    });

    it('invokes the router when loaded', function() {
        spyOn(learnjs, 'showView');
        learnjs.appOnReady();
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    it('subscribes to the hash change event', function() {
        learnjs.appOnReady();
        spyOn(learnjs, 'showView');
        $(window).trigger("hashchange");
        expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });
});