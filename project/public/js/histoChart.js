

function HistoChart() {
    var self = this;
    self.init();
};


/**
 * Initializes the svg elements required for this chart
 */
HistoChart.prototype.init = function(){

    var self = this;
    /*
     *Set svg parameters in terms of size ect..
     *
     */
    self.margin = {top: 10, right: 20, bottom: 30, left: 50};
    var divyearChart = d3.select("#histo-chart").classed("fullView", true);

    //Gets access to the div element created for this chart from HTML
    self.svgBounds = divyearChart.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = 1000;

    //creates svg element within the div
    self.svg = divyearChart.append("svg")
        .attr("width",self.svgWidth + 1000)
        .attr("height",self.svgHeight);

    self.svg
        .append("text")
        .attr("dx",450)
        .attr("dy",40)
        .text("Rank")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",700)
        .attr("dy",40)
        .text("Tuition")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",950)
        .attr("dy",40)
        .text("Income After Graduation")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",1200)
        .attr("dy",40)
        .text("Avg SAT Scores")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",1450)
        .attr("dy",40)
        .text("Avg ACT Scores")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",450)
        .attr("dy",400)
        .text("Total Applicants")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",700)
        .attr("dy",400)
        .text("Total Enrolled")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",950)
        .attr("dy",400)
        .text("% Admitted Men")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    self.svg
        .append("text")
        .attr("dx",1200)
        .attr("dy",400)
        .text("% Admitted Women")
        .attr("font","20x")
        .attr("fill","black")
        .style("font-weight", "bold");

    college1 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",75)
        .text("New England College")
        .attr("font","20x")
        .attr("fill","black");

    college2 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",105)
        .text("Campbell University")
        .attr("font","20x")
        .attr("fill","black");

    college3 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",135)
        .text("The King's college")
        .attr("font","20x")
        .attr("fill","black");

    college4 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",165)
        .text("Newbury College")
        .attr("font","20x")
        .attr("fill","black");

    college5 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",195)
        .text("University of Michigan-Ann Arbor")
        .attr("font","20x")
        .attr("fill","black");

    college6 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",225)
        .text("University of Minnesota-Twin Cities")
        .attr("font","20x")
        .attr("fill","black");

    college7 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",255)
        .text("Pennsylvania State University-Main Campus")
        .attr("font","20x")
        .attr("fill","black");

    college8 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",285)
        .text("University of California-Irvine")
        .attr("font","20x")
        .attr("fill","black");

    college9 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",315)
        .text("University of California-Davis")
        .attr("font","20x")
        .attr("fill","black");

    college10 = self.svg
        .append("text")
        .attr("dx",0)
        .attr("dy",345)
        .text("University of California-San Diego")
        .attr("font","20x")
        .attr("fill","black");
};

/**
 * Creates tiles and tool tip for each state, legend for encoding the color scale information.
 *
 * @param electionResult election data for the year selected
 * @param colorScale global quantile scale based on the winning margin between republicans and democrats
 */
HistoChart.prototype.update = function(data){
    var self = this;
    console.log(data);

};