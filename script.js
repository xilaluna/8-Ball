$(".eight_ball").click(function() {
    $(".answers").hide();
    $(".eight_ball").addClass("shake");
    var cars = [" It is certain","As I see it, yes","Reply hazy, try again","Don't count on it"," It is decidedly so","Most likely"," Ask again later"," My reply is no","Without a doubt","Outlook good","Better not tell you now","My sources say no","Yes - definitely","Yes","Cannot predict now","Outlook not so good","You may rely on it","Signs point to yes","Concentrate and ask again","Very doubtful"];
    var x = Math.floor((Math.random() * cars.length) );
    var item = cars [x];
    $(".eight_ball").append( $(`<p class="answers">${item}</p>`).hide().fadeIn(1.25*1000,
        function() {
        $(".eight_ball").removeClass("shake");
        } ) );
});
