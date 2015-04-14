describe('triangulator', function(){

    it("returns Equilateral if input1 === input2", function(){
        expect(triangulator(1, 1, 1)).to.equal('Equilateral');
    });
    it("returns Equilateral if input1 === input3", function(){
        expect(triangulator(2, 2, 2)).to.equal('Equilateral');
    });
    it("returns Equilateral if input2 === input3", function(){
        expect(triangulator(3, 3, 3)).to.equal('Equilateral');
    });
    it("returns a scalene triangle if input2 !== input3", function(){
        expect(triangulator(2, 3, 4)).to.equal('Scalene');
    });
    it("returns a scalene triangle if input1 !== input2", function(){
        expect(triangulator(2, 3, 4)).to.equal('Scalene');
    });
    it("returns a scalene triangle if input1 !== input3", function(){
        expect(triangulator(2, 3, 4)).to.equal('Scalene');
    });
    it("returns a Isosceles triangle if input2 === input3", function(){
        expect(triangulator(2, 3, 3)).to.equal('Isosceles');
    });
    it("returns a Isosceles triangle if input1 !== input2", function(){
        expect(triangulator(2, 3, 3)).to.equal('Isosceles');
    });
    it("returns a Isosceles triangle if input1 == input3", function(){
        expect(triangulator(2, 3, 3)).to.equal('Isosceles');
    });
    it("returns a Not a triangle triangle if input4 < input3", function(){
        expect(triangulator(2, 3, 6)).to.equal('not a triangle');
    });
    it("returns a Not a triangle triangle if input5 < input1", function(){
        expect(triangulator(4, 2, 1)).to.equal('not a triangle');
    });
    it("returns a Not a triangle triangle if input6 < input2", function(){
        expect(triangulator(2, 10, 6)).to.equal('not a triangle');
    });


});
