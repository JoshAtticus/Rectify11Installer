////////////////////////////////////////////////////////////////////////////////
//
// LOCALIZABLE VARIABLES
//
////////////////////////////////////////////////////////////////////////////////
var L_SHOWMORE_TEXT             = "mehre Tage Vorhersage";
var L_SHOWLESS_TEXT             = "weniger Tage Vorhersage";
var L_FULLMODE_TEXT             = "mehr Info";
var L_MINIMODE_TEXT             = "weniger Info";
var L_REFRESH_TEXT             	= "aktualsiere Daten";

Wlng_defLastSearch = "Berlin, Germany";
Wlng_defLocationCode = "GMXX0007";

Alng_defLastSearch = "Berlin, Germany";
Alng_defLocationCode = "EUR|DE|GM003|BERLIN|";

WUlng_defLastSearch = "Berlin, Germany";
WUlng_defLocationCode = "Berlin Alexanderplatz";

MSNlng_defLastSearch = "Berlin, Germany";
MSNlng_defLocationCode = "wc:GMXX0007";

WElng_defLastSearch = "Berlin, Germany";
WElng_defLocationCode = "GMXX0007";

WBlng_defLastSearch = "Berlin, Germany";
WBlng_defLocationCode = "58439|EDDT";

YAlng_defLastSearch = "Berlin, Deutschland";
YAlng_defLocationCode = "10385";

GISlng_defLastSearch = "Berlin, Deutschland";
GISlng_defLocationCode = "10381";

var periodsArray = new Array("","Abend","Nacht","Morgen","Nachmittag","Tag");

var periodsArrayGismeteo = new Array("Nacht","Morgen","Nacht","Abend");
var imghintArrayGismeteo = new Array('Klar','Bewölkt','Teils bewölkt','Trübe','Teils bewölkt, Regen','Trübe, Regen','Teils bewölkt, Schnee','Trübe, Schnee','Gewitter');
var imghintArrayGismeteoShort =new Array('Klar','Heiter','Teils bewölkt','Bewölkt','Bewölkt, teils Regen','Trübe, Regen','Bewölkt, teils Schnee','Trübe, Schnee','Gewitter');    

var lng_Updating = "Aktualisieren";
var lng_NoData = "N/A";
var lng_Today = "Heute";
var lng_Tomorrow = "Morgen";
var lng_Updating_Time_Text = "nächsten Update in";


var lng_WeatherStatus = {
	"Blizzard": "Schneesturm",
	"Blowing Dust": "Staubverwehungen",
	"Blowing Dust and Windy": "Staubverwehungen",
        "Blowing Snow and Windy": "Schneeverwehungen",
	"Blowing Snow": "Schneeverwehungen",
	"Blowing Snow Showers": "Schneesturm",
	"Blowing Widespread Dust": "Staubverwehungen",
	"Chance of a Thunderstorm": "voraus. Gewitter",
	"Clear": "Klar",
	"Clear and Windy": "Klar und windig",
	"Cloudy": "Bewölkt",
	"Cloudy and Windy": "Bewölkt und windig",        
	"Cloudy / Wind": "Bewölkt und windig",
	"Drifting Snow": "Schneetreiben",
	"Drifting Snow and Windy": "Schneetreiben, Wind",
	"Drizzle": "Nieselregen",
        "Drizzle and Fog": "Nieselregen, Nebel", 
        "Drizzle and Windy": "Nieselregen, windig",
	"Dust": "Staub",
	"Fair": "Heiter",
	"Fair and Windy": "Heiter und windig",
	"Few Showers": "geringe Schauer",
	"Few Showers / Wind": "Schauer, windig",
	"Few Snow Showers": "Schneeschauer",
	"Few Snow Showers / Wind": "Schneeschauer, Wind",
	"Fine": "Klar",
	"Fog": "Nebel",
        "Fog and Windy": "Nebel und windig",
	"Freezing Drizzle": "Gefrierender Niesel",
        "Freezing Drizzle and Fog": "Gefrierender Niesel",
	"Freezing Fog": "Gefrierender Nebel",	
        "Freezing Rain": "Gefrierender Regen",
	"Freezing Rain / Sleet": "Gefrierender Regen",
	"Hail": "Hagel",
	"Haze": "Dunst",
	"Haze / Rain / Snow": "Dunst/Regen/Schnee",
	"Haze / Rain / Wind": "Dunst/Regen/Wind",
	"Haze and Windy": "Dunst und windig",
	"Heavy Blowing Snow Showers": "Schneesverwehungen",
        "Heavy Drizzle": "Starker Nieselregen",
	"Heavy Fog": "dichter Nebel",
	"Heavy Freezing Drizzle": "Gefrierender Niesel",
	"Heavy Rain Icy": "heftiger Eisregen",
	"Heavy Rain": "heftiger Regen",
	"Heavy Rain Showers": "heftiger Regen",
        "Heavy Rain Shower": "heftiger Regen",
	"Heavy Snow and Windy": "Schnee und Wind",
	"Heavy Snow Shower": "Schneeschauer",
	"Heavy Snow Shower and Windy": "Schneeschauer, Wind",	
	"Heavy Snow": "starker Schneefall",
        "Heavy T-Storm": "starke Gewitter",
	"Heavy T-Storms": "starke Gewitter",
	"Hot / Sunny": "heiß, sonnig",
	"Hot": "Heiß",
	"Humid": "Feucht",
	"Ice Crystals": "Eiskristalle",
	"Ice Crystals Low Drifting Snow Showers": "Schneeverwehungen",
	"Isolated T-Storms": "örtlich Gewitter",
	"Light Drizzle": "Leichter Niesel",
        "Light Drizzle and Windy": "etwas Niesel, Wind",
	"Light Freezing Drizzle": "Gefrierender Niesel",
	"Light Freezing Rain": "Gefrierender Regen",
	"Light Ice Pellets": "leichte Eisgraupel",
	"Light Rain": "Leichter Regen",
	"Light Rain / Freezing Rain": "Gefrierender Regen",
        "Light Rain and Freezing Rain": "Gefrierender Regen",
	"Light Rain / Freezing": "Gefrierender Regen",
	"Light Rain / Wind": "Leichter Regen/Wind",
	"Light Rain / Windy": "Regen, windig",
	"Light Rain and Fog": "Regen und Nebel",
	"Light Rain and Windy": "Regen und windig",
	"Light Rain Icy": "Leichter Eisregen",
	"Light Rain Mist": "Regen Nebelschleier",
	"Light Rain Shower": "Regenschauer",
	"Light Rain Showers": "Regenschauer",
	"Light Rain Shower and Windy": "Regenschauer, Wind",
	"Light Rain with Thunder": "Regen mit Gewitter",
	"Light Snow": "Leichter Schneefall",
	"Light Snow / Wind": "Schnee und Wind",
        "Light Snow / Fog": "Schnee / Nebel",
        "Light Snow and Fog": "Schnee und Nebel", 
        "Light Snow and Windy and Fog": "Schnee/Wind/Nebel",
	"Light Snow and Fog": "Schnee und Nebel",
	"Light Snow and Freezing Rain": "Gefrier.Schneeregen",
	"Light Snow and Windy": "Schnee und Wind",
	"Light Snow Grains": "Schneegraupel",
	"Light Snow Shower": "Schneeschauer",
        "Light Snow with Thunder":"Schnee mit Gewitter",
	"Light Thunderstorm Rain": "Gewitterregen",
	"Light Wintry Mix": "Leichter Wintermix",
	"Low Drifting Sand": "Sandverwehungen",
	"Low Drifting Snow": "Schneeverwehungen",
	"Low Drifting Snow Showers": "Schneeverwehungen",
	"Mist": "Nebelschleier",
	"Misty": "Trübe",
	"Mostly Clear": "Überwiegend Klar",
	"Mostly Cloudy": "Überwiegend wolkig",
	"Mostly Cloudy / Wind": "meist wolkig, Wind",
	"Mostly Cloudy and Windy": "Bewölkt und windig",
	"Mostly Sunny": "Überwiegend sonnig",
	"Mostly Sunny / Wind": "meist sonnig, Wind",
        "N/A": "nicht verfügbar",
	"Overcast": "Bedeckt",
	"Partial Fog": "Teilweise Nebel",
	"Partly Clear": "Teils Klar",
	"Partly Cloudy": "Teilweise wolkig",
	"Partly Cloudy / Wind": "Teils bewölkt, Wind",	
	"Partly Cloudy and Windy": "Bewölkt und windig",
	"Partly Sunny": "Teils sonnig",
	"Partly Sunny / Wind": "Teils sonnig, Wind",
	"Patches of Fog": "Nebelschwaden",
	"PM Cloud": "Nachmittags Wolken",
	"PM Light Rain": "Nachmittags Regen",
	"PM Light Rain / Wind": "Leichter Regen/Wind",
	"PM Light Snow": "Leichter Schnee",
	"PM Rain / Snow": "Regen, Schnee",
	"PM Rain / Snow Showers": "Regen, Schnee",
	"PM Rain / Snow Showers / Wind": "Regen, Schnee, Wind",
	"PM Rain": "Nachmittags Regen",
	"PM Showers": "Nachmittags Schauer",
	"PM Showers / Wind": "Schauer und Wind",
	"PM Snow Showers": "Schneeschauer",
	"PM Snow Showers / Wind": "Schneeschauer, Wind",
	"PM Snow": "Nachmittags Schnee",
	"PM Sun": "Nachmittags sonnig",
	"PM T-Storms": "später Gewitter",
	"Rain / Freezing Rain": "Gefrierender Regen",
	"Rain / Snow": "Regen, Schnee",
	"Rain / Snow / Wind": "Regen, Schnee, Wind",
	"Rain / Snow Showers": "Regen/Schneeschauer",
	"Rain / Snow Showers / Wind": "Regen, Schnee, Wind",
	"Rain / Thunder": "Regen, Gewitter",
	"Rain / Wind": "Regen, Wind",
	"Rain": "Regen",
	"Rain and Snow": "Schneeregen",
        "Rain and Snow and Windy": "Schneeregen, windig",
	"Rain and Windy": "Regen und windig",
        "Rain Shower": "Regenschauer",
	"Rain Shower and Windy": "Regenschauer, Wind",
	"Rain Showers": "Regenschauer",
	"Rain to Snow": "Schneeregen",
	"Rainstorm": "Regensturm",
	"Rainy": "regnerisch",
        "Sandstorm": "Sandsturm",  
	"Scattered Clouds": "vereinzelt Wolken",
	"Scattered Flurries": "Teils Schneeschauer",
	"Scattered Flurries / Wind": "Schneeschauer, Wind",
	"Scattered Showers": "Vereinzelt Schauer",
	"Scattered Showers / Wind": "Teils Schauer, Wind",
	"Scattered Snow Showers": "Teils Schneeschauer",
	"Scattered Snow Showers / Wind": "Schneeschauer, Wind",
	"Scattered Thunderstorms": "Teils Gewitter",
	"Scattered T-Storms": "Teils Gewitter",
	"Shallow Fog": "gelegendlich Nebel",
	"Shallow Fog Mist": "gelegendlich Nebel",
	"Showers": "Schauer",
	"Showers / Wind": "Schauer und Wind",
	"Showers in the Vicinity": "Schauer in der Nähe",
	"Sleet": "Graupel",
        "Sleet and Freezing Rain": "Gefrier.Schneeregen",
	"Smoke": "Rauch",
	"Snow": "Schnee",
	"Snow / Rain Icy Mix": "Schnee, Eisregenmix",
	"Snow / Rain Mix": "Schnee, Regen Mix",
	"Snow / Wind": "Schnee, Wind",
        "Snow and Fog": "Schnee und Nebel",
	"Snow and windy": "Schnee und windig",
	"Snow Grains": "Schneegraupel",
	"Snow Shower / Wind": "Schneeschauer, Wind",
        "Snow Shower and Windy": "Schneeschauer, Wind",
	"Snow Shower": "Schneeschauer",
	"Snow Showers": "Schneeschauer",
	"Snow Storms": "Schneesturm",
	"Snow to Rain": "Schnee dann Regen",
	"Snow to Wintry Mix": "Schnee zu Wintermix",
	"Snowflakes": "Schneeflocken",
	"Snowy": "verschneit",
        "Snow and Freezing Rain": "Gefrier.Schneeregen",
	"Snow and Sleet": "Schnee und Graupel",
        "Snow and Windy": "Schnee und Wind",
	"Sunny": "Sonnig",
	"Sunny / Wind": "Sonnig, Wind",
        "Sunny and Windy": "sonnig und windig",
	"Thunder": "Donner",
	"Thunder in the Vicinity": "Donner in der Nähe",
	"Thundershowers": "Gewitterschauer",
	"Thunderstorms and Rain": "Gewitter und Regen",
	"Thunderstorms": "Gewitter",
	"T-Showers": "Gewitterregen",
	"T-Storm": "Gewitter",
	"T-Storm and Windy": "Gewitter und windig",
	"T-Storms": "Gewitter",
	"T-Storms / Wind": "Gewitter, Wind",
	"Typhoon": "Taifun",
        "Unknown Precip": "Niederschlag",
	"Widespread Dust": "verbreitet Staub",
	"Wind / Snow": "Wind, Schnee",
	"Windy / Snowy": "windig, verschneit",
	"Windy Rain": "windig, Regen",
	"Windy": "Windig",
	"Wintry Mix to Rain": "Wintermix zu Regen",
	"Wintry Mix": "Wintermix"
	
};

var lng_AccuWeatherStatus = {
        "A Flurry": "ein Schneeschauer",
        "A Shower": "ein Schauer",
        "Becoming cloudy": "trocken, aber trübe",
        "Blowing Snow": "Schneeverwehungen",
	"Clear": "Klar",
        "Cloudy": "Bewölkt",  
        "Clouds And Sun": "Wolken und Sonne",      
        "Dense Fog": "dichter Nebel",
        "Drifting Snow": "Schneetreiben",
        "Drizzle": "Nieselregen",
        "Drizzle/rain": "Nieselregen",
        "Drizzle/snow": "Schneeregen", 
        "Dust": "Staub",
        "Fair": "Heiter",
        "Fair and Windy": "Heiter und windig",
        "Flurries": "Schneeschauer", 
        "Fog": "Nebel",
        "Foggy": "Neblig",
        "Frz.drizzle": "Gefrierender Niesel",
        "Freezing Rain": "Gefrierender Regen",
        "Ground Fog": "Bodennebel",
        "Haze": "Dunst",
        "Hazy Clouds": "Schleierwolken",
        "Hazy Sunshine": "Diesiger Sonnschein",
        "Heavy Drizzle": "Starker Nieselregen",
        "Heavy Rain": "heftiger Regen",
        "Heavy Rain Shower": "starke Regenschauer",
        "Hvy.rainshower": "heftiger Regen",
        "Heavy Snow": "heftiger Schneefall",
        "Heavy Snow Shower": "heftiger Schneefall",
        "Heavy Thunderstorm": "schweres Gewitter",
	"Hvy.snowshower": "heftiger Schneefall",       
        "Ice": "Eis",
        "Ice Crystals": "Eiskristalle",
        "Lgt.frz.driz.": "Gefrierender Niesel",
        "Lgt.snow/fog": "Schnee, Nebel",
        "Lgt.rainshower": "Regenschauer",
        "Lgt.snowshower": "Schneeschauer",
        "Light Drizzle": "Leichter Niesel",
        "Light Freezing Rain": "Gefrierender Regen",        
	"Light Rain": "Leichter Regen",
       	"Light Rain Shower": "Leichter Regen",
	"Light Rain Shower and Windy": "etwas Regen, windig",       
        "Light Snow Grains": "Schneegraupel",
        "Light Snow Shower": "Schneeschauer",
        "Light Fog": "Leichter Nebel",
        "Light Snow": "Leichter Schneefall",
        "Light Rain with Thunder": "Regen mit Gewitter",
        "Mist": "Nebelschleier",
        "Mostly Clear": "Überwiegend Klar",
	"Mostly Sunny": "Überwiegend sonnig",
        "Mostly Cloudy and Windy": "Bewölkt, windig",
	"Mostly Cloudy": "Überwiegend wolkig",
        "Overcast": "Bedeckt",
        "Partial Fog": "Teilweise Nebel",
        "Partly Clear": "Teils Klar",
	"Partly Sunny": "Teils sonnig",	
	"Partly Cloudy": "Teilweise wolkig", 
        "Rain/drizzle": "Nieselregen", 
        "Rain/snow": "Regen / Schnee",    
        "Rain And Snow": "Regen und Schnee",  
        "Rain": "Regen",
	"Rain Shower": "Regenschauer",
        "Rainshower": "Regenschauer",
        "Rain and Snow": "Regen und Schnee",
        "Scattered T-Storms": "Teils Gewitter",
        "Scattered Showers": "vereinzelt Schauer",
        "Showers": "Schauer",
	"Showers in the Vicinity": "Schauer in der Nähe",
        "Shallow Fog": "gelegendlich Nebel",
        "Sleet": "Graupel",
        "Smoke": "Rauch",
        "Smoky": "Rauch",
        "Snow": "Schnee",
        "Snow And Fog": "Schnee und Nebel",
        "Snow/drizzle": "Schnee, Nieselregen",
        "Snow/rain": "Schnee / Regen",	
	"Snow Shower": "Schneeschauer",
        "Snowshower": "Schneeschauer",
        "Some Clouds": "Teilweise wolkig",
	"Sunny": "Sonnig",
        "Thunder": "Donner",
	"Thunder/Rain": "Donner, Regen",
        "Thunderstorm": "Gewitterregen",
	"Thundershower": "Gewitterschauer",	
	"Thunder in the Vicinity": "Donner in der Nähe",	
	"T-Storm": "Gewitter",
        "Widespread Dust": "verbreitet Staub",
        "Wintry Precip.": "Winterliches Wetter"
};


var lng_WundergroundStatus = {
        "blowing sand": "Sandtreiben",
        "blowing snow": "Schneetreiben",
        "blowing snow mist": "Schneetreiben",
	"clear": "Klar",
        "cloudy": "Bewölkt",
        "dense fog": "dichter Nebel",
        "drifting snow": "Schneetreiben",
        "drizzle": "Nieselregen",
        "drizzle light snow grains": "Schneegriesel",
        "drizzle rain mist": "Nieselregen, Nebel",
        "drizzle mist": "Nieselregen, Nebel",
        "dust": "Staub",
        "fair": "Heiter",
	"fair and windy": "Heiter und windig",
        "foggy": "Neblig",
        "fog": "Nebel",
        "fog light rain": "Nebel, Regen",
        "fog mist": "Nebelschleier",
        "fog smoke": "Nebel, Rauch",
        "fog shallow fog": "flacher Bodennebel",
        "freezing drizzle freezing fog": "Gefrier. Sprühregen",
        "freezing drizzle low drifting snow mist": "Gefrier. Sprühregen",  
        "freezing drizzle mist": "Gefrierender Niesel",
        "freezing fog": "Gefrierender Nebel",
        "freezing fog mist": "Gefrierender Nebel",
        "haze": "Dunst",
        "heavy blowing snow": "Schneetreiben",
        "heavy drizzle": "Starker Nieselregen",
        "heavy fog": "dichter Nebel", 
        "heavy low drifting snow": "heftiger Schneefall",
        "heavy rain": "Starkregen", 
        "heavy rain mist": "heftiger Regen",
        "heavy rain fog": "heftiger Regen",
        "heavy rain showers": "heftiger Regen",
        "heavy showers snow blowing snow": "heftiger Schneefall",  
        "heavy snow": "heftiger Schneefall",
        "heavy snow shower": "Schneeschauer", 
        "heavy snow showers": "Schneeschauer",
        "heavy showers snow rain": "Schneeregen",
        "heavy showers rain": "heftiger Regen",
        "heavy showers snow": "Schneeschauer",
        "hvy.snowshower": "Schneeschauer", 
        "heavy showers snow low drifting snow": "Schneeschauer",
        "heavy snow blowing snow": "heftiger Schneefall",
        "heavy snow rain fog": "Schneeregen",
        "heavy snow low drifting snow mist": "starker Schneefall", 
        "heavy snow low drifting snow": "starker Schneefall", 
        "heavy thunderstorm rain": "Gewitterregen",
        "heavy thunderstorm rain fog": "Gewitterregen/Nebel",
        "heavy thunderstorm rain mist": "Gewitterregen/Nebel",
        "ice": "Eis",
        "ice Crystals": "Eiskristalle",
        "ice crystals": "Eiskristalle",
        "ice crystals blowing snow": "Eiskristalle",
        "ice crystals low drifting snow": "Eiskristalle", 
        "ice crystals smoke": "Eiskristalle, Rauch", 
        "ice crystals mist": "Eiskristalle, Nebel",
        "light blowing snow": "Schneetreiben",
        "light drizzle": "Leichter Niesel",
        "light drizzle fog": "Nieselregen, Nebel",
        "light drizzle mist": "Leichter Niesel",
        "light drizzle rain": "Nieselregen",  
        "light drizzle rain fog": "Nieselregen, Nebel",
        "light drizzle snow mist": "etwas Schneegraupel",
        "light drizzle snow grains mist": "etwas Schneegraupel", 
        "light freezing drizzle fog": "Gefrierender Niesel",  
        "light freezing rain": "Gefrierender Regen",
        "light freezing drizzle": "Gefrierender Niesel",
        "light freezing drizzle mist": "Gefrier. Sprühregen",
        "light freezing drizzle snow": "Gefrier.Schneeregen",
        "light freezing drizzle snow grains": "Gefrier. Sprühregen",
        "light freezing drizzle freezing fog": "Gefrier. Sprühregen",    
        "light freezing rain mist": "Gefrierender Nebel",  
        "light freezing rain snow": "Gefrier.Schneeregen",  
        "light fog": "Leichter Nebel",
        "light haze": "Leichter Dunst",
        "light ice pellets": "Graupeln",
        "light low drifting sand":"Leichtes Sandfegen",
        "light low drifting snow": "Schneetreiben",
        "light rain fog": "Regen, Nebel",
        "light rain ice": "Leichter Eisregen",
        "light rain snow": "Schneeregen",
        "light rain snow mist": "Schneeregen, trübe",  
        "light rain haze": "Regen, Dunst",  
        "light rain shower": "Regenschauer",
        "light rain shower and Windy": "Regenschauer, Wind",
        "lgt.rainshower": "Regenschauer",
        "light rain showers": "Regenschauer",
        "light rain patches fog": "Regen, teils Nebel",
        "light rain drizzle": "Leichter Regen",
        "light rain drizzle mist": "Leichter Regen",  
	"light rain": "Leichter Regen",
        "light rain mist": "Regen, Dunst",
	"light rain with thunder": "Regen, Gewitter",
        "light snow mist": "Schnee, Trübe",
        "light snow fog": "Schnee, Nebel",  
        "light showers rain": "Regenschauer",
        "light showers rain thunderstorm": "Regen, Gewitter",
        "light showers rain fog": "Regen, Nebel",
        "light showers rain mist": "Regenschauer", 
        "light showers rain snow": "Schneeregen",
        "light showers rain snow mist": "Schneeregen, Trüb",
        "light rain snow fog": "Schneeregen, Nebel",
        "light showers snow": "Schneeschauer",
        "light showers snow fog": "Schneeschauer/Nebel",
        "light showers snow haze": "Schneeschauer/Dunst",
        "light showers snow mist": "Schneeschauer/Trübe",  
        "light showers snow light blowing snow": "Schneetreiben",
        "light showers snow low drifting snow": "Schneeschauer",
        "light showers snow blowing snow": "Schneeschauer",
        "light showers snow freezing fog": "Schneeschauer",
        "light small hail showers": "Hagelschauer",
        "light snow": "Leichter Schneefall",
        "light snow drizzle mist": "Schneeregen, Nebel",           
        "light snow grains": "Schneegraupel",
        "light snow grains mist": "Schneegraupel",
        "light snow grains freezing fog": "Schneegraupel",  
        "light snow grains low drifting snow": "Schneegraupel", 
        "light snow grains snow mist": "Schneegraupel",      	
	"light snow blowing snow": "Schneeverwehungen",
        "light snow freezing drizzle": "Leichter Schneefall", 
        "light snow freezing mist": "Leichter Schneefall",   
        "light snow freezing fog": "Leichter Schneefall", 
        "light snow haze": "Leichter Schneefall",
        "light snow light low drifting snow": "Schneetreiben", 
        "light snow mist": "Leichter Schneefall",  
        "light snow mist low drifting snow": "Schneeverwehungen",
        "light snow rain": "Schneeregen",
        "light snow rain fog": "Schneeregen, Nebel", 
        "light snow rain mist": "Schneeregen",
        "light snow low drifting snow": "Schneetreiben", 
        "light snow low drifting snow mist": "Schneetreiben",
        "light snow smoke": "Leichter Schneefall",   
        "light snow shower": "Schneeschauer",
        "light snow showers": "Schneeschauer",
        "light thunderstorm": "Gewitterregen",
        "light thunderstorm rain": "Gewitterregen",
        "light thunderstorm rain mist": "Gewitterregen",
        "light thunderstorm rain fog": "Gewitterregen,Nebel", 
        "light thunderstorm snow freezing fog": "Gewitter mit Schnee",
        "low drifting snow": "Schneetreiben", 
        "low drifting snow mist": "Schneetreiben/Nebel", 
        "low drifting snow snow haze": "Schneegriesel,Dunst",   
        "mist": "Nebelschleier",      
        "mist patches fog": "Wasserdunst",
        "mist shallow fog": "Dunst, Bodennebel",  
        "mostly cloudy": "Überwiegend wolkig",
        "mostly cloudy and windy": "meist bewölkt,Wind",
        "mostly clear": "Überwiegend Klar",
	"mostly sunny": "Überwiegend sonnig",
        "n/a": "nicht verfügbar",        
        "overcast": "Bedeckt",  
        "partial fog": "Teilweise Nebel",
        "partly clear": "Teils Klar",
        "partly cloudy": "Teilweise wolkig",
	"partly sunny": "Teils sonnig", 
        "patches fog": "stellenweise Nebel",
        "patches fog mist": "stellenweise Nebel",
        "patches fog shallow fog": "Nebelschwaden",
        "patches fog shallow fog mist": "Nebelschwaden",  
        "patches of fog": "Nebelschwaden",         
	"rain": "Regen",
        "rain fog": "Regen, Nebel",
        "rain mist": "Regen, Dunst",
        "rain drizzle mist": " Nieselregen, Nebel",
        "rain drizzle": " Nieselregen",
	"rain shower": "Regenschauer",
        "rain and snow": "Schnee und Regen",
        "rain snow mist": "Schneeregen, trübe",  
        "sandstorm": "Sandsturm",
        "sand whirls": "Sandwirbel",
        "shallow fog": "gelegendlich Nebel",
        "scattered showers": "Vereinzelt Schauer",
        "scattered t-storms": "Vereinzelt Gewitter",
        "scattered clouds": "vereinzelt Wolken",
        "shallow fog mist": "Leichter Nebel", 
        "showers": "Schauer",
        "showers rain": "Regenschauer",
        "showers rain mist": "Regenschauer",
        "showers rain squalls": "Regenschauer, Böen",
        "showers small hail rain": "Schauer mit Hagel",
        "showers small hail snow rain": "Hagel, Schneeregen",
        "showers snow blowing snow": "Schneeschauer",
        "showers snow low drifting snow": "Schneeschauer",
        "showers snow": "Schneeschauer",
        "showers snow rain mist": "Schnee/Regenschauer",
	"showers in the vicinity": "Schauer in der Nähe",
        "smoke": "Rauch",
        "snow haze": "Schnee, Dunst",
        "smoke mist": "Rauch",        
        "snow blowing snow": "Schneetreiben",          
	"snow": "Schnee",
        "snow fog": "Schnee, Nebel",
        "snow freezing fog": "Schnee, Nebel",
        "snow grains": "Schneegraupel",  
        "snow mist": "Schnee, Trüb",
        "snow mist low drifting snow": "Schneeverwehungen",
        "snow low drifting snow": "Schneetreiben",  
        "snow low drifting snow mist": "Schneetreiben",
        "snow rain mist": "Schneeregen, Trüb",
        "snow grains mist": "Schneegraupel, Trüb",
        "snow snow grains mist": "Schnee, Trüb",  
        "snow shower": "Schneeschauer",
	"sunny": "Sonnig",	
	"thunder": "Donner",
	"thunder/rain": "Donner/Regen",
        "thunderstorm": "Gewitterregen",
        "thunderstorm drizzle": "Gewitterregen",
        "thunderstorm heavy showers rain": "Gewitter,Starkregen",
        "thunderstorm rain": "Gewitterregen",
        "thunderstorm rain mist": "Gewitterregen",
        "thunderstorm rain fog": "Gewitterregen,Nebel",
        "thunderstorm showers rain": "Gewitterregen", 
        "thunderstorms and rain": "Gewitterregen",
	"thundershower": "Gewitterschauer",
	"thunder in the vicinity": "Donner in der Nähe",
        "t-storm": "Gewitter",	
	"widespread dust": "verbreitet Staub"
           
};



var lng_MSNStatus = {
	"Blizzard": "Schneesturm",
	"Blowing Dust": "Staubverwehungen",
	"Blowing Dust and Windy": "Staubverwehungen",
	"Blowing Snow": "Schneeverwehungen",
	"Blowing Snow Showers": "Schneesturm",
	"Blowing Widespread Dust": "Staubverwehungen",
	"Chance of a Thunderstorm": "voraus. Gewitter",
	"Clear": "Klar",
	"Clear and Windy": "Klar und windig",
	"Cloudy": "Bewölkt",
	"Cloudy and Windy": "Bewölkt und windig",
        "Claudy / PM Sun,": "Bewölkt, dann Sonne",        
	"Cloudy / Wind": "Bewölkt, windig",
	"Drifting Snow": "Schneetreiben",
	"Drifting Snow and Windy": "Schneetreiben, Wind",
	"Drizzle": "Nieselregen",
	"Dust": "Staub",
	"Fair": "Heiter",
	"Fair and Windy": "Heiter und windig",
	"Few Showers": "geringe Schauer",
	"Few Showers / Wind": "Schauer, windig",
	"Few Snow Showers": "Schneeschauer",
	"Few Snow Showers / Wind": "Schneeschauer, Wind",
	"Fine": "Klar",
        "Flurries": "Schneeschauer",
	"Fog": "Nebel",
	"Freezing Drizzle": "Gefrierender Niesel",
	"Freezing Fog": "Gefrierender Nebel",	
	"Freezing Rain / Sleet": "Gefrierender Regen",
	"Hail": "Hagel",
	"Haze": "Dunst",
	"Haze / Rain / Snow": "Dunst/Regen/Schnee",
	"Haze / Rain / Wind": "Dunst/Regen/Wind",
	"Haze and Windy": "Dunst und windig",
	"Heavy Blowing Snow Showers": "Schneesverwehungen",
	"Heavy Fog": "dichter Nebel",
	"Heavy Freezing Drizzle": "Gefrierender Niesel",
	"Heavy Rain Icy": "heftiger Eisregen",
	"Heavy Rain": "heftiger Regen",
	"Heavy Rain Showers": "heftiger Regen",
	"Heavy Snow and Windy": "Schnee und Wind",
	"Heavy Snow Shower": "Schneeschauer",
	"Heavy Snow Shower and Windy": "Schneeschauer, Wind",	
	"Heavy Snow": "starker Schneefall",
	"Heavy T-Storms": "starke Gewitter",
	"Hot / Sunny": "heiß, sonnig",
	"Hot": "Heiß",
	"Humid": "Feucht",
	"Ice Crystals": "Eiskristalle",
	"Ice Crystals Low Drifting Snow Showers": "Schneeverwehungen",
	"Isolated T-Storms": "örtlich Gewitter",
	"Light Drizzle": "Leichter Niesel",
	"Light Freezing Drizzle": "Gefrierender Niesel",
	"Light Freezing Rain": "Gefrierender Regen",
	"Light Ice Pellets": "leichte Eisgraupel",
	"Light Rain": "Leichter Regen",
	"Light Rain / Freezing Rain": "Gefrierender Regen",
	"Light Rain / Freezing": "Gefrierender Regen",
	"Light Rain / Wind": "Leichter Regen/Wind",
	"Light Rain / Windy": "Regen, windig",
	"Light Rain and Fog": "Regen und Nebel",
	"Light Rain and Windy": "Regen und windig",
	"Light Rain Icy": "Leichter Eisregen",
	"Light Rain Mist": "Regen Nebelschleier",
	"Light Rain Shower": "Regenschauer",
	"Light Rain Showers": "Regenschauer",
	"Light Rain Shower and Windy": "Regenschauer, Wind",
	"Light Rain with Thunder": "Regen mit Gewitter",
	"Light Snow": "Leichter Schneefall",
	"Light Snow / Wind": "Schnee, Wind",
	"Light Snow and Fog": "Schnee und Nebel",
	"Light Snow and Freezing Rain": "Gefrier.Schneeregen",
	"Light Snow and Windy": "Schnee und Wind",
	"Light Snow Grains": "Schneegraupel",
	"Light Snow Shower": "Schneeschauer",
	"Light Thunderstorm Rain": "Gewitterregen",
	"Light Wintry Mix": "Leichter Wintermix",
	"Low Drifting Sand": "Sandverwehungen",
	"Low Drifting Snow": "Schneeverwehungen",
	"Low Drifting Snow Showers": "Schneeverwehungen",
	"Mist": "Nebelschleier",
	"Misty": "Trübe",
	"Mostly Clear": "Überwiegend Klar",
	"Mostly Cloudy": "Überwiegend wolkig",
	"Mostly Cloudy / Wind": "meist wolkig, Wind",
	"Mostly Cloudy and Windy": "Bewölkt und windig",
	"Mostly Sunny": "Überwiegend sonnig",
	"Mostly Sunny / Wind": "meist sonnig, Wind",
        "Not Available": "nicht verfügbar",
	"Overcast": "Bedeckt",
	"Partial Fog": "Teilweise Nebel",
	"Partly Clear": "Teils Klar",
	"Partly Cloudy": "Teilweise wolkig",
	"Partly Cloudy / Wind": "Teils bewölkt, Wind",
	"Partly Cloudy and Windy": "Bewölkt und windig",
	"Partly Sunny": "Teils sonnig",
	"Partly Sunny / Wind": "Teils sonnig, Wind",
	"Patches of Fog": "Nebelschwaden",
	"Rain / Freezing Rain": "Gefrierender Regen",
	"Rain / Snow": "Regen, Schnee",
	"Rain / Snow / Wind": "Regen, Schnee, Wind",
	"Rain / Snow Showers": "Regen/Schneeschauer",
	"Rain / Snow Showers / Wind": "Regen, Schnee, Wind",
	"Rain / Thunder": "Regen, Gewitter",
	"Rain / Wind": "Regen, Wind",
	"Rain": "Regen",
	"Rain and Snow": "Regen und Schnee",
	"Rain and Windy": "Regen und windig",
	"Rain Shower": "Regenschauer",
	"Rain Shower and Windy": "Regenschauer, Wind",
	"Rain Showers": "Regenschauer",
	"Rain to Snow": "Regen zu Schnee",
	"Rainstorm": "Regensturm",
	"Rainy": "Regnerisch",
	"Scattered Clouds": "vereinzelt Wolken",
	"Scattered Flurries": "Teils Schneeschauer",
	"Scattered Flurries / Wind": "Schneeschauer, Wind",
	"Scattered Showers": "vereinzelt Schauer",
	"Scattered Showers / Wind": "Teils Schauer, Wind",
	"Scattered Snow Showers": "Teils Schneeschauer",
	"Scattered Snow Showers / Wind": "Schneeschauer, Wind",
	"Scattered Thunderstorms": "Teils Gewitter",
	"Scattered T-Storms": "Teils Gewitter",
	"Shallow Fog": "gelegendlich Nebel",
	"Shallow Fog Mist": "gelegendlich Nebel",
	"Showers": "Schauer",
        "Showers / Clear": "Schauer, teils Klar",
	"Showers / Wind": "Schauer und Wind",
	"Showers in the Vicinity": "Schauer in der Nähe",
	"Sleet": "Graupel",
	"Smoke": "Rauch",
	"Snow": "Schnee",
	"Snow / Rain Icy Mix": "Schnee, Eisregenmix",
	"Snow / Rain Mix": "Schnee, Regen Mix",
	"Snow / Wind": "Schnee, Wind",
	"Snow and windy": "Schnee und windig",
	"Snow Grains": "Schneegraupel",
	"Snow Showers / Sun": "Schneeschauer",
	"Snow Shower / Wind": "Schneeschauer, Wind",
	"Snow Shower": "Schneeschauer",
	"Snow Showers": "Schneeschauer",
	"Snow Storms": "Schneesturm",
	"Snow to Rain": "Schnee zu Regen",
	"Snow to Wintry Mix": "Schnee zu Wintermix",
	"Snowflakes": "Schneeflocken",
	"Snowy": "Verschneit",
	"Snow and Sleet": "Schnee und Graupel",
        "Sprinkles": "Nieselregen",
        "Sunny (Clear)": "Sonnig, Klar",
	"Sunny": "Sonnig",
	"Sunny / Wind": "Sonnig, Wind",
	"Sunny and Windy": "Sonnig und windig",
	"Thunder": "Donner",
	"Thunder in the Vicinity": "Donner in der Nähe",
	"Thundershowers": "Gewitterschauer",
	"Thunderstorms and Rain": "Gewitter und Regen",
	"Thunderstorms": "Gewitter",
	"T-Showers": "Gewitterregen",
	"T-Storm": "Gewitter",
	"T-Storm and Windy": "Gewitter und windig",
	"T-storms": "Gewitter",
	"T-Storms / Wind": "Gewitter, Wind",
	"Typhoon": "Taifun",
	"Widespread Dust": "verbreitet Staub",
	"Wind / Snow": "Wind, Schnee",
	"Windy / Snowy": "windig, verschneit",
	"Windy Rain": "windig, Regen",
	"Windy": "Windig",
	"Wintry Mix to Rain": "Wintermix zu Regen",
	"Wintry Mix": "Wintermix"
};



var lng_WeatherEyeStatus = {
	"A few clouds": "vereinzelt Wolken",
	"Blizzard": "Schneesturm",
	"Blowing Dust": "Staubverwehungen",
	"Blowing Sand": "Sandtreiben",
	"Blowing Snow": "Schneetreiben",
	"Clear": "Klar",
	"Cloudy": "Bewölkt",
	"Drizzle": "Nieselregen",
	"Dust": "Staub",
	"Fair": "Heiter",
	"Flurries": "Schneeschauer",
	"Fog": "Nebel",
	"Foggy with Thunder": "neblig mit Donner",
	"Freezing Drizzle": "Gefrierender Niesel",
	"Freezing Rain": "Gefrierender Regen",
	"Hail": "Hagel",
	"Haze": "Dunst",
	"Hazy with Thunder": "diesig mit Donner",
	"Heavy Drizzle": "Starker Nieselregen",
	"Heavy Flurries": "Heftiger Schneefall",
	"Heavy Freezing Drizzle": "Gefrierender Niesel",
	"Heavy Freezing Rain": "Gefrierender Regen",
	"Heavy Hail": "Starker Hagel",
	"Heavy Ice Pellets": "Heftige Eisgraupel",
	"Heavy Ice Pellet Showers": "Eisgraupelschauer",
	"Heavy Rain": "Heftiger Regen",
	"Heavy Rain Showers": "starke Regenschauer",
	"Heavy Snow": "Heftiger Schneefall",
	"Heavy Snow Grains": "Schneegraupel",
	"Heavy Thunderstorm": "Heftige Gewitter",
	"Heavy Thundershower": "Gewitterschauer",
        "Ice Сrystals": "Eiskristalle",
	"Ice Fog": "Gefrierender Nebel",
	"Ice Pellets": "Graupeln",
	"Ice Pellet Showers": "Graupelschauer",
	"Light Drizzle": "Leichter Niesel",
	"Light Freezing Drizzle": "Gefrierender Niesel",
	"Light Freezing Rain": "Gefrierender Regen",
	"Light Flurries": "Leichter Schneefall",
	"Light Hail": "Leichter Hagel",
	"Light Ice Pellets": "leichtes Graupeln",
	"Light Ice Pellet Showers": "Graupelschauer",
	"Light Rain": "Leichter Regen",
	"Light Rain Showers": "Regenschauer",
	"Light Snow": "Leichter Schneefall",
	"Light Snow Grains": "Schneegraupel",
	"Light Snow Pellets": "Reifgraupel",
	"Light Thunderstorm": "leichtes Gewitter",
	"Light Thundershower": "Gewitterschauer",
	"Overcast": "Bedeckt",
	"Partly Cloudy": "Teilweise wolkig",
	"Rain": "Regen",
	"Rain and Snow mixed": "Schnee, Regen Mix",
	"Rain Showers": "Regenschauer",
	"Severe Thunder": "Schwere Gewitter",
	"Sky Obscured": "Nebel oder Eisnebel",
	"Smoke": "Rauch",
	"Snow": "Schnee",
	"Snow Grains": "Schneegraupel",
	"Snow Pellets": "Reifgraupel",
	"Thunder": "Donner",
	"Thunderstorm": "Gewitterregen",
	"Thundershower": "Gewitterschauer",
        "Variable": "unbeständig"
};


var lng_WeatherBugStatus = {
	"Blizzard": "Schneesturm",
	"Blowing Dust": "Staubverwehungen",
	"Blowing Dust and Windy": "Staubverwehungen",
	"Blowing Snow": "Schneeverwehungen",
	"Blowing Snow Showers": "Schneesturm",
	"Blowing Widespread Dust": "Staubverwehungen",
	"Chance of a Thunderstorm": "voraus. Gewitter",
        "Chance Rain Shower": "voraus. Regen",
        "Chance of Rain Showers": "voraus. Regen", 
	"Clear": "Klar",
	"Clear and Windy": "Klar und windig",
	"Cloudy": "Bewölkt",
	"Cloudy and Windy": "Bewölkt und windig",        
	"Cloudy / Wind": "Bewölkt und windig",
	"Drifting Snow": "Schneetreiben",
	"Drifting Snow and Windy": "Schneetreiben, Wind",
	"Drizzle": "Niesel",
	"Dust": "Staub",
        "Duststorm": "Staubsturm",
	"Fair": "Heiter",
	"Fair and Windy": "Heiter und windig",
	"Few Showers": "geringe Schauer",
	"Few Showers / Wind": "Schauer, windig",
	"Few Snow Showers": "Schneeschauer",
	"Few Snow Showers / Wind": "Schneeschauer, Wind",
	"Fine": "Klar",
        "Flurries": "Schneeschauer",
	"Fog": "Nebel",
        "Foggy": "Neblig",
	"Freezing Drizzle": "Gefrierender Niesel",
	"Freezing Fog": "Gefrierender Nebel",	
        "Freezing Rain": "Gefrierender Regen",
	"Freezing Rain / Sleet": "Gefrierender Regen",
        "Frozen Mix": "Gefrierender Mix",
	"Hail": "Hagel",
	"Haze": "Dunst",
	"Haze / Rain / Snow": "Dunst/Regen/Schnee",
	"Haze / Rain / Wind": "Dunst/Regen/Wind",
	"Haze and Windy": "Dunst und windig",
        "Hazy": "Diesig",
	"Heavy Blowing Snow Showers": "Schneesverwehungen",
        "Heavy Drizzle": "Starker Nieselregen",
	"Heavy Fog": "dichter Nebel",
	"Heavy Freezing Drizzle": "Gefrierender Niesel",
	"Heavy Rain Icy": "heftiger Eisregen",
	"Heavy Rain": "heftiger Regen",
	"Heavy Rain Showers": "heftiger Regen",
	"Heavy Snow and Windy": "Schnee und Wind",
	"Heavy Snow Shower": "Schneeschauer",
        "Heavy Snow Showers": "Schneeschauer",
	"Heavy Snow Shower and Windy": "Schneeschauer, Wind",	
	"Heavy Snow": "starker Schnee",
	"Heavy T-Storms": "starke Gewitter",
        "Heavy Thunderstorms": "starke Gewitter",
        "Heavy Thunderstorm": "starkes Gewitter",
	"Hot / Sunny": "heiß, sonnig",
	"Hot": "Heiß",
        "Hot and Humid": "heiß und feucht",
	"Humid": "Feucht",
	"Ice Crystals": "Eiskristalle",
	"Ice Crystals Low Drifting Snow Showers": "Schneeverwehungen",
	"Isolated T-Storms": "örtlich Gewitter",
	"Light Drizzle": "Leichter Niesel",
	"Light Freezing Drizzle": "Gefrierender Niesel",
	"Light Freezing Rain": "Gefrierender Regen",
	"Light Ice Pellets": "leichte Eisgraupel",
	"Light Rain": "Leichter Regen",
	"Light Rain / Freezing Rain": "Gefrierender Regen",
	"Light Rain / Freezing": "Gefrierender Regen",
	"Light Rain / Wind": "Regen und Wind",
	"Light Rain / Windy": "Regen, windig",
	"Light Rain and Fog": "Regen und Nebel",
	"Light Rain and Windy": "Regen und windig",
	"Light Rain Icy": "Leichter Eisregen",
	"Light Rain Mist": "Regen Nebelschleier",
	"Light Rain Shower": "Regenschauer",
	"Light Rain Showers": "Regenschauer",
	"Light Rain Shower and Windy": "Regenschauer, Wind",
	"Light Rain with Thunder": "Regen mit Gewitter",
        "Light Sleet": "Leichter Graupel",
	"Light Snow": "Leichter Schneefall",
	"Light Snow / Wind": "Schnee und Wind",
	"Light Snow and Fog": "Schnee und Nebel",
	"Light Snow and Freezing Rain": "Schnee mit Regen",
	"Light Snow and Windy": "Schnee und Wind",
	"Light Snow Grains": "Schneegraupel",
	"Light Snow Shower": "Schneeschauer",
        "Light Snow Showers": "Schneeschauer",
        "Light Thunderstorm": "leichte Gewitter",
	"Light Thunderstorm Rain": "Gewitterregen",
	"Light Wintry Mix": "Leichter Wintermix",
	"Low Drifting Sand": "Sandverwehungen",
	"Low Drifting Snow": "Schneeverwehungen",
	"Low Drifting Snow Showers": "Schneeverwehungen",
	"Mist": "Nebelschleier",
	"Misty": "Trübe",
        "Moderate Drizzle": "Leichter Niesel",
        "Moderate Freezing Fog": "Gefrierender Nebel",
        "Moderate Snow": "etwas Schnee",
        "Moderate Snow Grains": "etwas Schneegraupel",
        "Moderate Snow Showers": "Schneeschauer",
        "Moderate Thunderstorm": "leichte Gewitter", 
        "Moderate Rain": "Leichter Regen",
        "Moderate Rain Showers": "Regenschauer",
	"Mostly Clear": "Überwiegend Klar",
        "Mostly Cloudy": "Überwiegend wolkig",
	"Mostly Cloudy ": "Überwiegend wolkig",
	"Mostly Cloudy / Wind": "meist wolkig, Wind",
	"Mostly Cloudy and Windy": "Bewölkt und windig",
	"Mostly Sunny": "Überwiegend sonnig",
	"Mostly Sunny / Wind": "meist sonnig, Wind",
        "N/A": "nicht verfügbar",
	"Overcast": "Bedeckt",
	"Partial Fog": "Teilweise Nebel",
	"Partly Clear": "Teils Klar",
	"Partly Cloudy": "Teils bewölkt",
	"Partly Cloudy / Wind": "Teils bewölkt, Wind",
	"Partly Cloudy and Windy": "Bewölkt und windig",
	"Partly Sunny": "Teils sonnig",
	"Partly Sunny / Wind": "Teils sonnig, Wind",
	"Patches of Fog": "Nebelschwaden",
	"Rain / Freezing Rain": "Gefrierender Regen",
	"Rain / Snow": "Regen, Schnee",
	"Rain / Snow / Wind": "Regen, Schnee, Wind",
	"Rain / Snow Showers": "Regen/Schneeschauer",
	"Rain / Snow Showers / Wind": "Regen, Schnee, Wind",
	"Rain / Thunder": "Regen, Gewitter",
	"Rain / Wind": "Regen, Wind",
	"Rain": "Regen",
	"Rain and Snow": "Regen und Schnee",
	"Rain and Windy": "Regen und windig",
	"Rain Shower": "Regenschauer",
	"Rain Shower and Windy": "Regenschauer, Wind",
	"Rain Showers": "Regenschauer",
	"Rain to Snow": "Schneeregen",
	"Rainstorm": "Regensturm",
	"Rainy": "Regnerisch",
        "Sandstorm": "Sandsturm",  
	"Scattered Clouds": "Vereinzelt Wolken",
	"Scattered Flurries": "Teils Schneeschauer",
	"Scattered Flurries / Wind": "Schneeschauer, Wind",
	"Scattered Showers": "Vereinzelt Schauer",
	"Scattered Showers / Wind": "Teils Schauer, Wind",
	"Scattered Snow Showers": "Teils Schneeschauer",
	"Scattered Snow Showers / Wind": "Schneeschauer, Wind",
	"Scattered Thunderstorms": "Teils Gewitter",
	"Scattered T-Storms": "Teils Gewitter",
	"Shallow Fog": "gelegendlich Nebel",
	"Shallow Fog Mist": "gelegendlich Nebel",
	"Showers": "Schauer",
	"Showers / Wind": "Schauer und Wind",
	"Showers in the Vicinity": "Schauer in der Nähe",
        "Sleet Shower": "Eisregen", 
	"Sleet and Freezing Rain": "Gefrier.Schneeregen",
	"Smoke": "Rauch",
	"Snow": "Schnee",
	"Snow / Rain Icy Mix": "Schnee, Eisregenmix",
	"Snow / Rain Mix": "Schnee, Regen Mix",
	"Snow / Wind": "Schnee, Wind",
	"Snow and windy": "Schnee und windig",
	"Snow Grains": "Schneegraupel",
	"Snow Shower / Wind": "Schneeschauer, Wind",
	"Snow Shower": "Schneeschauer",
	"Snow Showers": "Schneeschauer",
	"Snow Storms": "Schneesturm",
	"Snow to Rain": "Schnee zu Regen",
	"Snow to Wintry Mix": "Schnee zu Wintermix",
	"Snowflakes": "Schneeflocken",
	"Snowy": "Verschneit",
        "Snow and Freezing Rain": "Gefrier.Schneeregen",
	"Snow and Sleet": "Schnee und Graupel",
	"Sunny": "Sonnig",
	"Sunny / Wind": "Sonnig, Wind",
        "Sunny and Windy": "Sonnig und windig",
	"Thunder": "Donner",
	"Thunder in the Vicinity": "Donner in der Nähe",
	"Thundershowers": "Gewitterschauer",
        "Thunderstorm": "Gewitter",
	"Thunderstorms and Rain": "Gewitter und Regen",
	"Thunderstorms": "Gewitter",
	"T-Showers": "Gewitterregen",
	"T-Storm": "Gewitter",
	"T-Storm and Windy": "Gewitter und windig",
	"T-Storms": "Gewitter",
	"T-Storms / Wind": "Gewitter, Wind",
	"Typhoon": "Taifun",
        "Very Cold": "sehr kalt",
        "Very Hot": "sehr heiß",
	"Widespread Dust": "verbreitet Staub",
	"Wind / Snow": "Wind, Schnee",
	"Windy / Snowy": "windig, verschneit",
	"Windy Rain": "windig, Regen",	
        "windy": "Windig",
        "Windy": "Windig", 
	"Wintry Mix to Rain": "Wintermix zu Regen",
	"Wintry Mix": "Wintermix", 
        "Warm and Humid": "Warm und feucht",          
        "30% Chance of Flurry": "zu 30% Schnee",
        "30% Chance of Frozen Mix": "zu 30% Gefrier. Mix",
        "30% Chance Rain Shower": "zu 30% Regenschauer",
        "30% Chance of Storms": "zu 30% Gewitter",
        "30% Chance of Light Snow": "zu 30% Schnee",
        "30% Chance of Rain": "zu 30% Regen",  
        "30% Chance of Drizzle": "zu 30% Niesel",
        "40% Chance Rain Shower": "zu 40% Regenschauer",
        "40% Chance of Flurry": "zu 40% Schnee",
        "40% Chance of Frozen Mix": "zu 40% Gefrier. Mix",
        "40% Chance of Light Snow": "zu 40% Schnee",
        "40% Chance of Storms": "zu 40% Gewitter",
        "40% Chance of Rain": "zu 40% Regen",  
        "40% Chance of Drizzle": "zu 40% Niesel",
        "50% Chance of Storms": "zu 50% Gewitter",
        "50% Chance of Flurry": "zu 50% Schnee",
        "50% Chance of Light Snow": "zu 50% Schnee",
        "50% Chance of Rain": "zu 50% Regen",  
        "50% Chance Rain Shower": "zu 50% Regenschauer",
        "50% Chance of Frozen Mix": "zu 50% Gefrier. Mix",
        "50% Chance of Drizzle": "zu 50% Niesel"
	
};


var lng_nodata = "N/A";

var lng_DayOfWeek = {
	Sunday: "Sonntag",
	Monday: "Montag",
	Tuesday: "Dienstag",
	Wednesday: "Mittwoch",
	Thursday: "Donnerstag",
	Friday: "Freitag",
	Saturday: "Samstag"

};

var lng_Stats = {
	pressure: "Luftdruck",
	pressuretrend: "Luftdruck↑↓",
	wind: "Wind",
	gust: "Windspitzen",
	visibility: "Sichtweite",
	humidity: "Luftfeuchte",
	flik: "Gefühlt",
	nothing: "Leer",
	sunrise: "Sonnaufg.↑",
	sunset: "Sonnunterg.↓",
	dewpoint: "Taupunkt",
	uvindex: "UV-Index",
	uvlevel: "UV-Level",
	moonterminator: "Mondphasen",
	latitude: "Breitengrad",
	longitude: "Längengrad",
	moonrise: "Mondaufg.↑",
	moonset: "Mondunterg.↓",
	precipitation: "Niederschlag",
	thunderstorm: "Gewitter",
	airquality: "Luftqualität",
       	watertemp: "Wassertemp.",
        localtime: "Ortszeit"        
};

var pressure_Stats = {
	falling: "<FONT COLOR='#4169E1'>fallend</FONT>",
	decreasing: "<FONT COLOR='#4169E1'>fallend</FONT>",
	rising: "<FONT COLOR='#FA8072'>steigend</FONT>",
	increasing: "<FONT COLOR='#FA8072'>steigend</FONT>",
	steady: "beständig"
};

var uv_Stats = {
	Low: "niedrig",
	Moderate: "mäßig",
	High: "hoch", 
        Extreme: "extrem"
};

var winddirection_Stats = {
	N: "<FONT COLOR='#FA8072'>N</FONT>",
	North: "<FONT COLOR='#FA8072'>N</FONT>",
	NNE: "<FONT COLOR='#FA8072'>NNO</FONT>",
	NE: "<FONT COLOR='#FFD700'>NO</FONT>",
	ENE: "<FONT COLOR='#FFD700'>ONO</FONT>",
	E: "<FONT COLOR='#00FF00'>O</FONT>",
	East: "<FONT COLOR='#00FF00'>O</FONT>",
	ESE: "<FONT COLOR='#00FF00'>OSO</FONT>",
	SE: "<FONT COLOR='#00FF00'>SO</FONT>",
	SSE: "<FONT COLOR='#00FF00'>SSO</FONT>",
	S: "<FONT COLOR='#FF3030'>S</FONT>",
	South: "<FONT COLOR='#FF3030'>S</FONT>",
	SSW: "<FONT COLOR='#FF3030'>SSW</FONT>",
	SW: "<FONT COLOR='#FFD700'>SW</FONT>",
	WSW: "<FONT COLOR='#FFD700'>WSW</FONT>",
	W: "<FONT COLOR='#FFFFFF'>W</FONT>",
	West: "<FONT COLOR='#FFFFFF'>W</FONT>",
	WNW: "<FONT COLOR='#FFFFFF'>WNW</FONT>",
	NW: "<FONT COLOR='#FFFFFF'>NW</FONT>",
	NNW: "<FONT COLOR='#FFFFFF'>NNW</FONT>"
};

var moon_Stats = {
	New: "Neumond",
	"Waxing Crescent": "R 1-49%",
	"First Quarter": "R 50%",
	"Waxing Gibbous": "R 51-99%",
	Full: "Vollmond",
	"Waning Gibbous": "L 51-99%",
	"Last Quarter": "L 50%",
	"Waning Crescent": "L 1-49%",
	Darkened: "Dunkelmond"
};

var moon_Stats_full = {
	New: "New",
	"Waxing Crescent": "Waxing Crescent",
	"First Quarter": "First Quarter",
	"Waxing Gibbous": "Waxing Gibbous",
	Full: "Full",
	"Waning Gibbous": "Waning Gibbous",
	"Last Quarter": "Last Quarter",
	"Waning Crescent": "Waning Crescent",
	Darkened: "Darkened"
};

var lng_Units = {
	"C": "C",
	"F": "F",
	"km": "km",
	"km/h": "km/h",
	"m/s": "m/s",
	"mb": "hpa",
	"mi": "mi",
	"mph": "mph",
	"in": "in",
	"cm": "cm",
	"mm": "mm",
	"kPa": "kPa"
};


var lng_Countries = {
	"DEU": "Deutschland",
        "Germany": "Deutschland",
        "DL": "Deutschland",
        "GM": "Deutschland",
	"Германия": "Deutschland"

};

var lng_Cities = {
        "Bad Tolz": "Bad Tölz",
        "Bad Munstereifel": "Bad Münstereifel",
        "Bad Munder am Deister": "Bad Münder am Deister",
        "Bad Munder": "Bad Münder",
        "Bad Schonborn": "Bad Schönborn",
        "Berlin Schoenefeld": "Berlin Schönefeld",
        "Boblingen": "Böblingen",
        "Bonen": "Bönen",
        "Bueckeburg": "Bückeburg",
        "Bruckmuhl": "Brückmühl",
        "Bremervorde": "Bremervörde",
        "Buckeburg": "Bückeburg",
        "Buttelborn": "Büttelborn",
        "Buchen": "Büchen",
        "Buhl": "Bühl",
        "Bruhl": "Brühl",
        "Burstadt": "Bürstadt",
        "Budingen": "Büdingen", 
        "Bruggen": "Brüggen",
        "Bruchkobel": "Bruchköbel",
        "Cologne": "Köln",
        "Koeln": "Köln",
        "Delbruck": "Delbrück",
        "Duesseldorf": "Düsseldorf",
        "D&#252;sseldorf": "Düsseldorf",
        "Dusseldorf": "Düsseldorf",
        "Duren": "Düren",
        "Dulmen": "Dülmen",        
        "Dobeln": "Döbeln", 
        "Donauworth": "Donauwörth",
        "Eisenhuttenstadt": "Eisenhüttenstadt",
        "Eckernforde": "Eckernförde",
        "Flensburg-Schaeferhaus": "Flensburg-Schäferhaus",
        "Florsheim": "Flörsheim",
        "Frondenberg": "Fröndenberg",
        "Fuerholzen": "Fürholzen",
        "Fuerstenfeldbruck": "Fürstenfeldbruck",
        "Furstenfeldbruck": "Fürstenfeldbruck",
        "Furstenwalde/Spree": "Fürstenwalde/Spree",
        "Furstenwalde": "Fürstenwalde",
        "Furth": "Fürth",
        "Fussen": "Füssen",
        "Georgsmarienhutte": "Georgsmarienhütte",
        "Gluckstadt": "Glückstadt",
        "Goppingen": "Göppingen",
        "Goerlitz": "Görlitz",
        "Gorlitz": "Görlitz",
        "Goettingen": "Göttingen",
        "Gottingen": "Göttingen",
        "Grobenzell": "Gröbenzell",
        "Guetersloh": "Gütersloh",
        "Gutersloh": "Gütersloh",
        "Gustrow": "Güstrow",
        "Gunzburg": "Günzburg",
        "Grafing bei Munchen": "Grafing bei München",
        "Grevesmuhlen": "Grevesmühlen",
        "Hoxter": "Höxter",
        "Horstel": "Hörstel",
        "Hovelhof": "Hövelhof",
        "Huhnfeld": "Hühnfeld",
        "Hude": "Hüde",
        "Hurth": "Hürth",
        "Huckeswagen": "Hückeswagen",
        "Huckelhoven": "Hückelhoven",
        "Ibbenburen": "Ibbenbüren",        
        "Immenstadt im Allgau": "Immenstadt im Allgaü",
        "Isny im Allgau": "Isny im Allgaü",
        "Julich": "Jülich",
        "Juterbog": "Jüterbog",
        "Koln": "Köln",
        "Kempten - Allgau": "Kempten - Allgaü",
        "Kirchheim bei Munchen": "Kirchheim bei München",
        "Kitzbuhel": "Kitzbühel",
        "Koeterberg": "Köterberg",
        "Kothen - Anhalt": "Köthen - Anhalt",
        "Kothen": "Köthen",
        "Korntal-Munchingen": "Korntal-Münchingen",
        "Konigsbrunn": "Königsbrunn",
        "Konigswinter": "Königswinter",
        "Konigslutter": "Königslutter",
        "Konigs Wusterhausen": "Königs Wusterhausen",
        "Konigstein": "Königstein",
        "Kurten": "Kürten",
        "Kunzelsau": "Künzelsau",
        "Kunzell": "Künzell",
        "Lauda-Konigshofen": "Lauda-Königshofen",
        "Leopoldshohe": "Leopoldshöhe",
        "Luebeck Blankensee": "Lübeck Blankensee",
        "Luechow": "Lüchow",
        "Luedenscheid": "Lüdenscheid",
        "Leutkirch im Allgau": "Leutkirch im Allgaü",
        "Lindenberg im Allgau": "Lindenberg im Allgaü", 
        "Lobau": "Löbau",
        "Lorrach": "Lörrach",     
        "Lubbecke": "Lübbecke",
        "Lubeck": "Lübeck",
        "Lubbenau": "Lübbenau",
        "Ludenscheid": "Lüdenscheid",
        "Ludinghausen": "Lüdinghausen",
        "Luneburg": "Lüneburg",
        "Lunen": "Lünen",
        "Mossingen": "Mössingen",
        "Moenchengladbach": "Münchengladbach",
        "Monchengladbach": "Münchengladbach",
        "Moglingen": "Möglingen",
        "Molln": "Mölln", 
        "Morfelden-Walldorf": "Mörfelden-Walldorf",
        "Muehlacker": "Mühlacker",
        "Muhlacker": "Mühlacker",
        "Muehldorf": "Mühldorf",
        "Muenchen": "München",
        "Muenchen Stadt": "München Stadt",
        "Muenster": "Münster",
        "Munster": "Münster",
        "Munich": "München",
        "Munchen": "München",
        "Munden": "Münden",
        "Muhldorf am Inn": "Mühldorf am Inn",
        "Muhlhausen/Thuringen": "Mühlhausen/Thuringen",
        "Muhlhausen": "Mühlhausen",
        "Muhltal": "Mühltal",
        "Muhlheim": "Mühlheim",
        "Mulheim an der Ruhr": "Mülheim an der Ruhr",
        "Mulheim-Karlich": "Mülheim-Karlich",
        "Mullheim": "Müllheim",
        "Munchberg": "Münchberg",
        "Munden": "Münden",
        "Munsingen": "Münsingen",
        "Munster": "Münster",
        "Niederkruchten": "Niederkrüchten",
        "Neumunster": "Neumünster",
        "Neustadt am Rubenberge": "Neustadt am Rübenberge",
        "Nordlingen": "Nördlingen",  
        "Nuerburg": "Nürburg",
        "Nuerburg Barweiler": "Nürburg Barweiler",
        "Nuremburg": "Nürnberg",
        "Nurnberg": "Nürnberg",
        "Nurtingen": "Nürtingen",
        "Numbrecht": "Nümbrecht",
        "Oehringen": "Öehringen",
        "Ohringen": "Öhringen",
        "Osnabruck": "Osnabrück",
        "Ostseebad Kuhlungsborn": "Ostseebad Kühlungsborn",
        "Puttlingen": "Püttlingen",
        "Puhlheim": "Pühlheim",
        "Rostock Warnemuende": "Rostock Warnemünde",
        "Rodermark": "Rödermark",
        "Rosrath": "Rösrath",
        "Russelsheim": "Rüsselsheim",
        "Rheda-Wiedenbruck": "Rheda-Wiedenbrück",
        "Saarbruecken": "Saarbrücken",
        "Saarbrucken": "Saarbrücken",
        "Schmuecke": "Schmücke",
        "Schalksmuhle": "Schalksmühle",
        "Schluchtern": "Schlüchtern",
        "Schmolln": "Schmölln",
        "Schoneberg": "Schöneberg",
        "Schoneck": "Schöneck",
        "Schonefeld": "Schönefeld",
        "Schoningen": "Schöningen",
        "Schwabmunchen": "Schwabmünchen",
        "Schwabisch Gmund": "Schwäbisch Gmünd",
        "Schwabisch Hall": "Schwäbisch Hall",
        "Sprockhovel": "Sprockhövel",
        "Stoetten": "Stötten",
        "Sommerda": "Sömmerda",
        "Sudbrookmerland": "Südbrookmerland",
        "Tonisvorst": "Tönisvorst",
        "Tangermunde": "Tangermünde",
        "Travemunde": "Travemünde",
        "Tubingen": "Tübingen",
        "Uberherrn": "Überherrn",
        "Uberlingen": "Überlingen",
        "Ubach-Palenberg": "Übach-Palenberg",
        "Ueckermuende": "Üeckermüende",
        "Ueckermunde": "Üeckermünde",
        "Volklingen": "Völklingen",
        "Waldbrol": "Waldbröl",
        "Wipperfurth": "Wipperfürth",
        "Wolfenb&#252;ttel": "Wolfenbüttel",
        "Wolfenbuttel": "Wolfenbüttel",
        "Wuerzburg": "Würzburg",
        "Wurzburg": "Würzburg",
        "Wurselen": "Würselen",
        "Wulfrath": "Wülfrath",
        "Zweibrucken": "Zweibrücken",
        "Zulpich": "Zülpich"
};


var CitiesGismeteoArray=new Array();
CitiesGismeteoArray[0]=["Aalen","Аален"];
CitiesGismeteoArray[1]=["Aachen","Аахен"];
CitiesGismeteoArray[2]=["Eisenach","Айзенах"];
CitiesGismeteoArray[3]=["Eisenhuttenstadt","Айзенхуттенштадт"];
CitiesGismeteoArray[4]=["Eilenburg","Айленбург"];
CitiesGismeteoArray[5]=["Einbeck","Айнбек"];
CitiesGismeteoArray[6]=["Eisleben","Айслебен"];
CitiesGismeteoArray[7]=["Eislingen","Айслинген"];
CitiesGismeteoArray[8]=["Eitorf","Айторф"];
CitiesGismeteoArray[9]=["Aichach","Айхах"];
CitiesGismeteoArray[10]=["Alen","Ален"];
CitiesGismeteoArray[11]=["Albstadt","Альбштадт"];
CitiesGismeteoArray[12]=["Alsdorf","Альсдорф"];
CitiesGismeteoArray[13]=["Alsfeld","Альсфелд"];
CitiesGismeteoArray[14]=["Altdorf","Альтдорф(Герм.)"];
CitiesGismeteoArray[15]=["Altena","Альтена"];
CitiesGismeteoArray[16]=["Altenburg","Альтенбург"];
CitiesGismeteoArray[17]=["Alfeld","Альфелд"];
CitiesGismeteoArray[18]=["Alfter","Альфтер"];
CitiesGismeteoArray[19]=["Alzey","Альцей"];
CitiesGismeteoArray[20]=["Alzenau","Альценау"];
CitiesGismeteoArray[21]=["Amberg","Амберг"];
CitiesGismeteoArray[22]=["Angermuende","Ангермюнде"];
CitiesGismeteoArray[23]=["Andernach","Андернах"];
CitiesGismeteoArray[24]=["Anklam","Анклам"];
CitiesGismeteoArray[25]=["Annaberg-Buchholz","Аннаберг-Бухгольц"];
CitiesGismeteoArray[26]=["Ansbach","Ансбах"];
CitiesGismeteoArray[27]=["Apolda","Аполда"];
CitiesGismeteoArray[28]=["Ahrensburg","Аренсбург"];
CitiesGismeteoArray[29]=["Arnsberg","Арнсберг"];
CitiesGismeteoArray[30]=["Arnstadt","Арнштадт"];
CitiesGismeteoArray[31]=["Attendorn","Аттендорн"];
CitiesGismeteoArray[32]=["Augsburg","Аугсбург"];
CitiesGismeteoArray[33]=["Aurich","Аурих"];
CitiesGismeteoArray[34]=["Ahaus","Ахаус"];
CitiesGismeteoArray[35]=["Achern","Ахерн"];
CitiesGismeteoArray[36]=["Achim","Ахим"];
CitiesGismeteoArray[37]=["Aschaffenburg","Ашаффенбург"];
CitiesGismeteoArray[38]=["Ascheberg","Ашеберг"];
CitiesGismeteoArray[39]=["Aschersleben","Ашерслебен"];
CitiesGismeteoArray[40]=["Babenhausen","Бабенхаузен"];
CitiesGismeteoArray[41]=["Bad Aibling","Бад-Айблинг"];
CitiesGismeteoArray[42]=["Bad Arolsen","Бад-Аролсен"];
CitiesGismeteoArray[43]=["Bad Bentheim","Бад-Бентхайм"];
CitiesGismeteoArray[44]=["Bad Berleburg","Бад-Берлебург"];
CitiesGismeteoArray[45]=["Bad Waldsee","Бад-Вальдси"];
CitiesGismeteoArray[46]=["Bad Vilbel","Бад-Вилбель"];
CitiesGismeteoArray[47]=["Bad Wildungen","Бад-Вильдунген"];
CitiesGismeteoArray[48]=["Bad Driburg","Бад-Дрибург"];
CitiesGismeteoArray[49]=["Bad Duerkheim","Бад-Дюркхайм"];
CitiesGismeteoArray[50]=["Baden Baden","Баден-Баден"];
CitiesGismeteoArray[51]=["Bad Salzungen","Бад-Зальцунген"];
CitiesGismeteoArray[52]=["Bad Seegeberg","Бад-Зегеберг"];
CitiesGismeteoArray[53]=["Bad Soden","Бад-Зоден"];
CitiesGismeteoArray[54]=["Bad Kissingen","Бад-Киссинген"];
CitiesGismeteoArray[55]=["Bad Krozingen","Бад-Крёцинген"];
CitiesGismeteoArray[56]=["Bad Kreuznach","Бад-Кройцнах"];
CitiesGismeteoArray[57]=["Bad Laasphe","Бад-Лаашпе"];
CitiesGismeteoArray[58]=["Bad Langensalza","Бад-Лангенсалца"];
CitiesGismeteoArray[59]=["Bad Lippspringe","Бад-Липшпринге"];
CitiesGismeteoArray[60]=["Bad Mergentheim","Бад-Мергентайм"];
CitiesGismeteoArray[61]=["Bad Munder","Бад-Мюндер"];
CitiesGismeteoArray[62]=["Bad Munstereifel","Бад-Мюнстерайфель"];
CitiesGismeteoArray[63]=["Bad Neuenahr-Ahrweiler","Бад-Нойнар-Арвайлер"];
CitiesGismeteoArray[64]=["Bad Neustadt","Бад-Нойштадт"];
CitiesGismeteoArray[65]=["Bad Nauheim","Бад-Нохайм"];
CitiesGismeteoArray[66]=["Bad Oeynhausen","Бад-Ойнхаузен"];
CitiesGismeteoArray[67]=["Bad Oldesloe","Бад-Олдеслой"];
CitiesGismeteoArray[68]=["Bad Pyrmont","Бад-Пьермонт"];
CitiesGismeteoArray[69]=["Bad Reichenhall","Бад-Райхенхолл"];
CitiesGismeteoArray[70]=["Bad Rappenau","Бад-Раппенау"];
CitiesGismeteoArray[71]=["Bad Tolz","Бад-Толц"];
CitiesGismeteoArray[72]=["Bad Friedrichshall","Бад-Фредрихсхолл"];
CitiesGismeteoArray[73]=["Bad Harzburg","Бад-Харцбург"];
CitiesGismeteoArray[74]=["Bad Hersfeld","Бад-Херсфельд"];
CitiesGismeteoArray[75]=["Bad Homburg","Бад-Хомбург"];
CitiesGismeteoArray[76]=["Bad Honnef","Бад-Хоннеф"];
CitiesGismeteoArray[77]=["Bad Hofgastein","Бад-Хофгштайн"];
CitiesGismeteoArray[78]=["Bad Zwischenahn","Бад-Цвишенах"];
CitiesGismeteoArray[79]=["Bad Schwartau","бад-Швартау"];
CitiesGismeteoArray[80]=["Bad Essen","Бад-Эссен"];
CitiesGismeteoArray[81]=["Baiersbronn","Баерсбронн"];
CitiesGismeteoArray[82]=["Baesweiler","Баесвайлер"];
CitiesGismeteoArray[83]=["Bayreuth","Байреут"];
CitiesGismeteoArray[84]=["Backnang","Бакнанг"];
CitiesGismeteoArray[85]=["Balingen","Балинген"];
CitiesGismeteoArray[86]=["Bamberg","Бамберг"];
CitiesGismeteoArray[87]=["Barsinghausen","Барсингхаузен"];
CitiesGismeteoArray[88]=["Bassum","Бассум"];
CitiesGismeteoArray[89]=["Bauntal","Баунтал"];
CitiesGismeteoArray[90]=["Bautzen","Баутцен"];
CitiesGismeteoArray[91]=["Bebra","Бебра"];
CitiesGismeteoArray[92]=["Beverungen","Беверунген"];
CitiesGismeteoArray[93]=["Bedburg","Бедбург"];
CitiesGismeteoArray[94]=["Beckingen","Бекинген"];
CitiesGismeteoArray[95]=["Bexbach","Бексбах"];
CitiesGismeteoArray[96]=["Beckum","Бекум"];
CitiesGismeteoArray[97]=["Beendorf","Бендорф"];
CitiesGismeteoArray[98]=["Bensheim","Бенсхайм"];
CitiesGismeteoArray[99]=["Bergen","Берген(Герм.)"];
CitiesGismeteoArray[100]=["Bergisch Gladbach","Бергих-Гладбах"];
CitiesGismeteoArray[101]=["Bergkamen","Бергкамен"];
CitiesGismeteoArray[102]=["Bergneustadt","Бергнойштадт"];
CitiesGismeteoArray[103]=["Bergheim","Бергхайм"];
CitiesGismeteoArray[104]=["Berlin","Берлин"];
CitiesGismeteoArray[105]=["Bernau","Бернау"];
CitiesGismeteoArray[106]=["Bernburg","Бернбург"];
CitiesGismeteoArray[107]=["Berchtesgaden","Берхтесгаден"];
CitiesGismeteoArray[108]=["Bietigheim","Бетигхайм"];
CitiesGismeteoArray[109]=["Biberach","Биберах"];
CitiesGismeteoArray[110]=["?","Биелефелд"];
CitiesGismeteoArray[111]=["Bielefeld","Билефельд"];
CitiesGismeteoArray[112]=["Bingen","Бинген"];
CitiesGismeteoArray[113]=["Bitterfeld","Биттерфельд"];
CitiesGismeteoArray[114]=["Blankenburg","Бланкенбург"];
CitiesGismeteoArray[115]=["Blieskastel","Блескастель"];
CitiesGismeteoArray[116]=["Blomberg","Бломберг"];
CitiesGismeteoArray[117]=["Bobingen","Бобинген"];
CitiesGismeteoArray[118]=["Boblingen","Боблинген"];
CitiesGismeteoArray[119]=["Bonen","Бонен"];
CitiesGismeteoArray[120]=["Bonn","Бонн"];
CitiesGismeteoArray[121]=["Boppard","Боппард"];
CitiesGismeteoArray[122]=["Borken","Боркен"];
CitiesGismeteoArray[123]=["Borna","Борна"];
CitiesGismeteoArray[124]=["Bottrop","Боттроп"];
CitiesGismeteoArray[125]=["Bocholt","Бохольт"];
CitiesGismeteoArray[126]=["Bochum","Бохум"];
CitiesGismeteoArray[127]=["Brakel","Бракель"];
CitiesGismeteoArray[128]=["Bramsche","Брамсхе"];
CitiesGismeteoArray[129]=["Brandenburg","Бранденбург"];
CitiesGismeteoArray[130]=["Braunschweig","Брауншвайг"];
CitiesGismeteoArray[131]=["Brake","Брейке"];
CitiesGismeteoArray[132]=["Bremen","Бремен"];
CitiesGismeteoArray[133]=["Bremervorde","Бремервюрде"];
CitiesGismeteoArray[134]=["Bremerhaven","Бремерхафен"];
CitiesGismeteoArray[135]=["Bretten","Бреттен"];
CitiesGismeteoArray[136]=["Brilon","Брилон"];
CitiesGismeteoArray[137]=["Bornheim","Бронхайм"];
CitiesGismeteoArray[138]=["Bruggen","Брюгген"];
CitiesGismeteoArray[139]=["Bruckmuhl","Брюкмюль"];
CitiesGismeteoArray[140]=["Bruhl","Брюль"];
CitiesGismeteoArray[141]=["Bruchkobel","Брюхкобел"];
CitiesGismeteoArray[142]=["Bruchsal","Брюхсал"];
CitiesGismeteoArray[143]=["Buxtehude","Букстехюде"];
CitiesGismeteoArray[144]=["Bunde","Бунде"];
CitiesGismeteoArray[145]=["Burg","Бург"];
CitiesGismeteoArray[146]=["Burgwedel","Бургведель"];
CitiesGismeteoArray[147]=["Burgdorf","Бургдорф(Герм.)"];
CitiesGismeteoArray[148]=["Burghausen","Бургхаузен"];
CitiesGismeteoArray[149]=["Burscheid","Бурсхайд"];
CitiesGismeteoArray[150]=["Burstadt","Бурштадт"];
CitiesGismeteoArray[151]=["Buchholz","Бухгольц"];
CitiesGismeteoArray[152]=["Butzbach","Буцбах"];
CitiesGismeteoArray[153]=["Budingen","Бюдинген"];
CitiesGismeteoArray[154]=["Buckeburg","Бюкебург"];
CitiesGismeteoArray[155]=["Buhl","Бюль"];
CitiesGismeteoArray[156]=["Burbach","Бюрбах"];
CitiesGismeteoArray[157]=["Buren","Бюрен"];
CitiesGismeteoArray[158]=["Buchen","Бюхен"];
CitiesGismeteoArray[159]=["Wadgassen","Вадгассен"];
CitiesGismeteoArray[160]=["Wadern","Вадерн"];
CitiesGismeteoArray[161]=["Waiblingen","Вайблинген"];
CitiesGismeteoArray[162]=["Weiden","Вайден"];
CitiesGismeteoArray[163]=["Wei?enburg","Вайзенбург"];
CitiesGismeteoArray[164]=["Wailerswist","Вайлерсвист"];
CitiesGismeteoArray[165]=["Weilheim","Вайлхайм"];
CitiesGismeteoArray[166]=["Weil","Вайль"];
CitiesGismeteoArray[167]=["Weil der Stadt","Вайль-дер-Штадт"];
CitiesGismeteoArray[168]=["Wildeshausen","Вайльдесхаузен"];
CitiesGismeteoArray[169]=["Weimar","Ваймар"];
CitiesGismeteoArray[170]=["Weingarten","Вайнгартен"];
CitiesGismeteoArray[171]=["Weinheim","Вайнхайм"];
CitiesGismeteoArray[172]=["Weinstadt","Вайнштадт"];
CitiesGismeteoArray[173]=["Wei?wasser","Вайсвассер"];
CitiesGismeteoArray[174]=["Wiesloch","Вайслох"];
CitiesGismeteoArray[175]=["Weiterstadt","Вайтерштадт"];
CitiesGismeteoArray[176]=["??","Вайхль"];
CitiesGismeteoArray[177]=["Wallenhorst","Валленхорст"];
CitiesGismeteoArray[178]=["Waldbrol","Вальдброль"];
CitiesGismeteoArray[179]=["Waldkirch","Вальдкирх"];
CitiesGismeteoArray[180]=["Waldkraiburg","Вальдкрайбург"];
CitiesGismeteoArray[181]=["Waldshut","Вальдсхут"];
CitiesGismeteoArray[182]=["Walsrode","Вальсроде"];
CitiesGismeteoArray[183]=["Waltrop","Вальтроп"];
CitiesGismeteoArray[184]=["Wangen","Ванген"];
CitiesGismeteoArray[185]=["Wandlitz","Вандлиц"];
CitiesGismeteoArray[186]=["Warburg","Варбург"];
CitiesGismeteoArray[187]=["Wardenburg","Варденбург"];
CitiesGismeteoArray[188]=["Waren","Варен"];
CitiesGismeteoArray[189]=["Warendorf","Варендорф"];
CitiesGismeteoArray[190]=["Warstein","Варштайн"];
CitiesGismeteoArray[191]=["Weißenfels","Васенфельс"];
CitiesGismeteoArray[192]=["Wassenberg","Вассенберг"];
CitiesGismeteoArray[193]=["Wachtberg","Вахтберг"];
CitiesGismeteoArray[194]=["Wegberg","Вегберг"];
CitiesGismeteoArray[195]=["Wedel","Ведель"];
CitiesGismeteoArray[196]=["Wedemark","Ведемарк"];
CitiesGismeteoArray[197]=["Wesel","Везель"];
CitiesGismeteoArray[198]=["????","Вейхе"];
CitiesGismeteoArray[199]=["Wendelstein","Вендельштайн"];
CitiesGismeteoArray[200]=["Wenden","Венден"];
CitiesGismeteoArray[201]=["Wendlingen","Вендлинген"];
CitiesGismeteoArray[202]=["Werdau","Вердау"];
CitiesGismeteoArray[203]=["Werder","Вердер"];
CitiesGismeteoArray[204]=["Werdohl","Вердхоль"];
CitiesGismeteoArray[205]=["Werl","Верль"];
CitiesGismeteoArray[206]=["Wermelskirchen","Вермельскирхен"];
CitiesGismeteoArray[207]=["Werne","Верне"];
CitiesGismeteoArray[208]=["Wernigerode","Вернигеруде"];
CitiesGismeteoArray[209]=["Wertheim","Вертхайм"];
CitiesGismeteoArray[210]=["Wesseling","Весселинг"];
CitiesGismeteoArray[211]=["Westerstede","Вестерштед"];
CitiesGismeteoArray[212]=["Westoverledingen","Вестоферлединген"];
CitiesGismeteoArray[213]=["Wetter","Веттер"];
CitiesGismeteoArray[214]=["Wetzlar","Вецлар"];
CitiesGismeteoArray[215]=["Wilhelmshaven","Вилгельмсхафен"];
CitiesGismeteoArray[216]=["Willich","Виллих"];
CitiesGismeteoArray[217]=["Wilnsdorf","Вильнсдорф"];
CitiesGismeteoArray[218]=["Windeck","Виндек"];
CitiesGismeteoArray[219]=["??????","Винер"];
CitiesGismeteoArray[220]=["Winsen","Винзен"];
CitiesGismeteoArray[221]=["Winnenden","Винненден"];
CitiesGismeteoArray[222]=["Wipperfurth","Випперфурт"];
CitiesGismeteoArray[223]=["Wiesbaden","Висбаден"];
CitiesGismeteoArray[224]=["Wismar","Висмар"];
CitiesGismeteoArray[225]=["Witten","Виттен"];
CitiesGismeteoArray[226]=["Wittenberg","Виттенберг"];
CitiesGismeteoArray[227]=["Wittenberge","Виттенберге"];
CitiesGismeteoArray[228]=["Wittlich","Виттлих"];
CitiesGismeteoArray[229]=["Wittmund","Виттмунд"];
CitiesGismeteoArray[230]=["Wittstock","Виттсток"];
CitiesGismeteoArray[231]=["Witzenhausen","Витценхаузен"];
CitiesGismeteoArray[232]=["Wolfen","Вольфен"];
CitiesGismeteoArray[233]=["Wolfenbuttel","Вольфенбуттель"];
CitiesGismeteoArray[234]=["Wolfratshausen","Вольфратсхаузен"];
CitiesGismeteoArray[235]=["Worms","Вормс"];
CitiesGismeteoArray[236]=["Worth","Ворт"];
CitiesGismeteoArray[237]=["Wulfrath","Вульфрат"];
CitiesGismeteoArray[238]=["Wolfsburg","Вульфсбург"];
CitiesGismeteoArray[239]=["Wunstorf","Вунсторф"];
CitiesGismeteoArray[240]=["Wuppertal","Вупперталь"];
CitiesGismeteoArray[241]=["Wurselen","Вурселен"];
CitiesGismeteoArray[242]=["Wurzburg","Вурцбург"];
CitiesGismeteoArray[243]=["Wurzen","Вурцен"];
CitiesGismeteoArray[244]=["Gaggenau","Гаггенау"];
CitiesGismeteoArray[245]=["Geislingen","Гайзлинген"];
CitiesGismeteoArray[246]=["Geilenkirchen","Гайленкирхен"];
CitiesGismeteoArray[247]=["Hamburg","Гамбург"];
CitiesGismeteoArray[248]=["Ganderkesee","Гандеркессе"];
CitiesGismeteoArray[249]=["Hannover","Ганновер"];
CitiesGismeteoArray[250]=["Garbsen","Гарбсен"];
CitiesGismeteoArray[251]=["Garmisch-Partenkirchen","Гармих-Партенкирхен"];
CitiesGismeteoArray[252]=["???????","Гармиш-Партенкирхен"];
CitiesGismeteoArray[253]=["Garching","Гархинг"];
CitiesGismeteoArray[254]=["Gauting","Гаутинг"];
CitiesGismeteoArray[255]=["Gevelsberg","Гевелсберг"];
CitiesGismeteoArray[256]=["Geldern","Гелдерн"];
CitiesGismeteoArray[257]=["Gelnhausen","Гелнхаузен"];
CitiesGismeteoArray[258]=["Gelsenkirchen","Гелсенкирхен"];
CitiesGismeteoArray[259]=["Giengen","Генген"];
CitiesGismeteoArray[260]=["Georgsmarienhutte","Георгсмаринхутте"];
CitiesGismeteoArray[261]=["Goppingen","Гёппинген"];
CitiesGismeteoArray[262]=["Gera","Гера"];
CitiesGismeteoArray[263]=["Geretsried","Геретсред"];
CitiesGismeteoArray[264]=["Gerlingen","Герлинген"];
CitiesGismeteoArray[265]=["Gorlitz","Гёрлиц"];
CitiesGismeteoArray[266]=["Germering","Гермеринг"];
CitiesGismeteoArray[267]=["Germersheim","Гермерсхайм"];
CitiesGismeteoArray[268]=["Gersthofen","Герстхофен"];
CitiesGismeteoArray[269]=["Geseke","Гесеке"];
CitiesGismeteoArray[270]=["Goslar","Гёслар"];
CitiesGismeteoArray[271]=["Gießen","Гессен"];
CitiesGismeteoArray[272]=["Gotha","Гёта"];
CitiesGismeteoArray[273]=["Gottingen","Гёттинген"];
CitiesGismeteoArray[274]=["?????????","Гёх"];
CitiesGismeteoArray[275]=["Gescher","Гешер"];
CitiesGismeteoArray[276]=["Gilching","Гилхинг"];
CitiesGismeteoArray[277]=["Ginsheim-Gustavsburg","Гинсхайм-Густавсбург"];
CitiesGismeteoArray[278]=["Geesthacht","Гистхахт"];
CitiesGismeteoArray[279]=["Gifhorn","Гифхорн"];
CitiesGismeteoArray[280]=["Gladbeck","Гладбек"];
CitiesGismeteoArray[281]=["Glinde","Глинде"];
CitiesGismeteoArray[282]=["Glauchau","Глохау"];
CitiesGismeteoArray[283]=["Greifswald","Грайвсвальд"];
CitiesGismeteoArray[284]=["Greiz","Грайц"];
CitiesGismeteoArray[285]=["Greven","Гревен"];
CitiesGismeteoArray[286]=["Grevenbroich","Гревенбройх"];
CitiesGismeteoArray[287]=["Griesheim","Гресхайм"];
CitiesGismeteoArray[288]=["Grefrath","Грефрат"];
CitiesGismeteoArray[289]=["Grimma","Гримма"];
CitiesGismeteoArray[290]=["Grobenzell","Гробенцель"];
CitiesGismeteoArray[291]=["Gronau","Гронау"];
CitiesGismeteoArray[292]=["Gro?-Gerau","Гросс-Герау"];
CitiesGismeteoArray[293]=["Gro?enhain","Гроссенхейн"];
CitiesGismeteoArray[294]=["Gro?ostheim","Гроссоштайм"];
CitiesGismeteoArray[295]=["Gro?-Umstadt","Гросс-Умштадт"];
CitiesGismeteoArray[296]=["Guben","Гюбен"];
CitiesGismeteoArray[297]=["Gummersbach","Гюммерсбах"];
CitiesGismeteoArray[298]=["Gunzburg","Гюнцбург"];
CitiesGismeteoArray[299]=["Gunzenhausen","Гюнценхаузен"];
CitiesGismeteoArray[300]=["Gustrow","Гюстров"];
CitiesGismeteoArray[301]=["Gutersloh","Гютерсло"];
CitiesGismeteoArray[302]=["Damme","Дамме"];
CitiesGismeteoArray[303]=["Darmstadt","Дармштадт"];
CitiesGismeteoArray[304]=["Datteln","Даттелн"];
CitiesGismeteoArray[305]=["Dachau","Дахау"];
CitiesGismeteoArray[306]=["Deggendorf","Деггендорф"];
CitiesGismeteoArray[307]=["Delbruck","Делбрук"];
CitiesGismeteoArray[308]=["Delitzsch","Делитзих"];
CitiesGismeteoArray[309]=["Delmenhorst","Делменхорст"];
CitiesGismeteoArray[310]=["Dessau","Дессау"];
CitiesGismeteoArray[311]=["Detmold","Детмолд"];
CitiesGismeteoArray[312]=["Jena","Джена"];
CitiesGismeteoArray[313]=["Julich","Джулих"];
CitiesGismeteoArray[314]=["??????????","Джухен"];
CitiesGismeteoArray[315]=["Dieburg","Дибург"];
CitiesGismeteoArray[316]=["Digolfing","Диголфинг"];
CitiesGismeteoArray[317]=["Dillenburg","Дилленбург"];
CitiesGismeteoArray[318]=["Dillingen(Donau)","Диллинген(Донау)"];
CitiesGismeteoArray[319]=["Dillingen(Saar)","Диллинген(Саар)"];
CitiesGismeteoArray[320]=["Dinslaken","Динслакен"];
CitiesGismeteoArray[321]=["Diepholz","Дифольц"];
CitiesGismeteoArray[322]=["Dietzenbach","Диценбах"];
CitiesGismeteoArray[323]=["Ditzingen","Дицинген"];
CitiesGismeteoArray[324]=["Dobeln","Добельн"];
CitiesGismeteoArray[325]=["Donauworth","Донауворт"];
CitiesGismeteoArray[326]=["Donaueschingen","Донаушинген"];
CitiesGismeteoArray[327]=["Dormagen","Дормаген"];
CitiesGismeteoArray[328]=["Dorsten","Дорстен"];
CitiesGismeteoArray[329]=["Dortmund","Дортмунд"];
CitiesGismeteoArray[330]=["Dreieich","Драейх"];
CitiesGismeteoArray[331]=["Dresden","Дрезден"];
CitiesGismeteoArray[332]=["Drensteinfurt","Дренштайннфурт"];
CitiesGismeteoArray[333]=["Duderstadt","Дудерштадт"];
CitiesGismeteoArray[334]=["Duisburg","Дуисбург"];
CitiesGismeteoArray[335]=["Dulmen","Дюлмен"];
CitiesGismeteoArray[336]=["Duren","Дюрен"];
CitiesGismeteoArray[337]=["Dusseldorf","Дюссельдорф"];
CitiesGismeteoArray[338]=["Saalbach","Заальбах"];
CitiesGismeteoArray[339]=["Salzwedel","Зальцведель"];
CitiesGismeteoArray[340]=["Salzkotten","Зальцкоттен"];
CitiesGismeteoArray[341]=["Sangerhausen","Зангерхаузен"];
CitiesGismeteoArray[342]=["Sarstedt","Зарштедт"];
CitiesGismeteoArray[343]=["Schalkau","Заулгау"];
CitiesGismeteoArray[344]=["Swisttal","Звистталь"];
CitiesGismeteoArray[345]=["Seeheim-Jugenheim","Зеехайм-Югенхайм"];
CitiesGismeteoArray[346]=["Seligenstadt","Зелигенштадт"];
CitiesGismeteoArray[347]=["Selb","Зельб"];
CitiesGismeteoArray[348]=["Selm","Зельм"];
CitiesGismeteoArray[349]=["Seelze","Зельце"];
CitiesGismeteoArray[350]=["Sehnde","Зенде"];
CitiesGismeteoArray[351]=["Senden","Зенден"];
CitiesGismeteoArray[352]=["Senftenberg","Зенфтенберг"];
CitiesGismeteoArray[353]=["Seesen","Зесен"];
CitiesGismeteoArray[354]=["Seevetal","Зефеталь"];
CitiesGismeteoArray[355]=["Siegburg","Зигбург"];
CitiesGismeteoArray[356]=["Siegen","Зиген"];
CitiesGismeteoArray[357]=["Sigmaringen","Зигмаринген"];
CitiesGismeteoArray[358]=["Simmerath","Зиммерат"];
CitiesGismeteoArray[359]=["Singen","Зинген"];
CitiesGismeteoArray[360]=["Sindelfingen","Зиндельфинген"];
CitiesGismeteoArray[361]=["Sinsheim","Зинсхайм"];
CitiesGismeteoArray[362]=["Sinzing","Зинциг"];
CitiesGismeteoArray[363]=["Soltau","Зольтау"];
CitiesGismeteoArray[364]=["Sommerda","Зоммерда"];
CitiesGismeteoArray[365]=["Sondershausen","Зондерсхаузен"];
CitiesGismeteoArray[366]=["Sonneberg","Зоннеберг"];
CitiesGismeteoArray[367]=["Sonthofen","Зонтхофен"];
CitiesGismeteoArray[368]=["Soest","Зоэст"];
CitiesGismeteoArray[369]=["Sudbrookmerland","Зудбрукмерланд"];
CitiesGismeteoArray[370]=["Suhl","Зуль"];
CitiesGismeteoArray[371]=["Sulzbach","Зульцбах"];
CitiesGismeteoArray[372]=["Sulzbach-Rosenberg","Зульцбах-Розенберг"];
CitiesGismeteoArray[373]=["Sundern","Зундерн"];
CitiesGismeteoArray[374]=["Ibbenburen","Иббенбурен"];
CitiesGismeteoArray[375]=["Idar-Oberstein","Идар-Оберштайн"];
CitiesGismeteoArray[376]=["Idstein","Идштайн"];
CitiesGismeteoArray[377]=["Iserlohn","Изерлохн"];
CitiesGismeteoArray[378]=["Isernhagen","Изернхаген"];
CitiesGismeteoArray[379]=["Illertissen","Иллертисен"];
CitiesGismeteoArray[380]=["Illingen","Иллинген"];
CitiesGismeteoArray[381]=["Ilmenau","Ильменау"];
CitiesGismeteoArray[382]=["Ingelheim","Ингельхайм"];
CitiesGismeteoArray[383]=["Ingolstadt","Ингольштадт"];
CitiesGismeteoArray[384]=["Itzehoe","Итцехо"];
CitiesGismeteoArray[385]=["Kaarst","Каарст"];
CitiesGismeteoArray[386]=["Kaiserslautern","Кайзерслаутерн"];
CitiesGismeteoArray[387]=["Kalv","Калв"];
CitiesGismeteoArray[388]=["Kalletal","Каллеталь"];
CitiesGismeteoArray[389]=["Kaltenkirchen","Кальтенкирхен"];
CitiesGismeteoArray[390]=["Cham","Кам"];
CitiesGismeteoArray[391]=["Kamen","Камен"];
CitiesGismeteoArray[392]=["Kamenz","Каменц"];
CitiesGismeteoArray[393]=["Kamp-Lintfort","Камп-Линтфорт"];
CitiesGismeteoArray[394]=["Karben","Карбен"];
CitiesGismeteoArray[395]=["Karlsbad","Карлсбад"];
CitiesGismeteoArray[396]=["Karlsruhe","Карлсруэ"];
CitiesGismeteoArray[397]=["Karlsfeld","Карлсфельд"];
CitiesGismeteoArray[398]=["Karlstadt","Карлштадт"];
CitiesGismeteoArray[399]=["Kassel","Касель"];
CitiesGismeteoArray[400]=["Castrop-Rauxel","Кастроп-Роксель"];
CitiesGismeteoArray[401]=["Kaufbeuren","Кауфбюрен"];
CitiesGismeteoArray[402]=["Kehl","Кель"];
CitiesGismeteoArray[403]=["Kelkheim","Келькхайм"];
CitiesGismeteoArray[404]=["Koln","Кельн"];
CitiesGismeteoArray[405]=["Kelheim","Кельхайм"];
CitiesGismeteoArray[406]=["Kempen","Кемпен"];
CitiesGismeteoArray[407]=["Kempten","Кемптен"];
CitiesGismeteoArray[408]=["Konigsbrunn","Кёнигсбрунн"];
CitiesGismeteoArray[409]=["Konigswinter","Кёнигсвинтер"];
CitiesGismeteoArray[410]=["Konigslutter","Кёнигслуттер"];
CitiesGismeteoArray[411]=["Konigs Wusterhausen","Кёнигс-Устерхаузен"];
CitiesGismeteoArray[412]=["Konigstein","Кёнигштайн"];
CitiesGismeteoArray[413]=["Kerpen","Керпен"];
CitiesGismeteoArray[414]=["Coswig","Кёсвиг"];
CitiesGismeteoArray[415]=["Kesfeld","Кёсфельд"];
CitiesGismeteoArray[416]=["Kevelaer","Кефелаер"];
CitiesGismeteoArray[417]=["Quickborn","Кикборн"];
CitiesGismeteoArray[418]=["Kiel","Киль"];
CitiesGismeteoArray[419]=["Kierspe","Кирспе"];
CitiesGismeteoArray[420]=["Kirchlengern","Кирхленгерн"];
CitiesGismeteoArray[421]=["Kirchheim unter Teck","Кирххайм-Унтер-Тек"];
CitiesGismeteoArray[422]=["Kirchhain","Кирххайн"];
CitiesGismeteoArray[423]=["Kitzbuhel","Кицбюэль"];
CitiesGismeteoArray[424]=["Kitzingen","Кицинген"];
CitiesGismeteoArray[425]=["Clausthal-Zellerfeld ","Клаустхол-Целлерфельд"];
CitiesGismeteoArray[426]=["Kleve","Клив"];
CitiesGismeteoArray[427]=["Cloppenburg","Клоппенбург"];
CitiesGismeteoArray[428]=["Kleinmachnow ","Кляйнмахнов"];
CitiesGismeteoArray[429]=["Koblenz","Кобленц"];
CitiesGismeteoArray[430]=["Coburg","Кобург"];
CitiesGismeteoArray[431]=["Kolbermoor","Кольбермоор"];
CitiesGismeteoArray[432]=["Konstanz","Констанц"];
CitiesGismeteoArray[433]=["Konz","Конц"];
CitiesGismeteoArray[434]=["Korbach","Корбах"];
CitiesGismeteoArray[435]=["Kornwestheim","Корнвестхайм"];
CitiesGismeteoArray[436]=["Korntal-Munchingen","Корнтал-Мюнхинген"];
CitiesGismeteoArray[437]=["Korschenbroich","Коршенбройх"];
CitiesGismeteoArray[438]=["Cottbus","Котбус"];
CitiesGismeteoArray[439]=["Kothen","Котхен"];
CitiesGismeteoArray[440]=["Crailsheim","Креилсхайм"];
CitiesGismeteoArray[441]=["Krefeld","Крефелд"];
CitiesGismeteoArray[442]=["Crimmitschau","Криммитсхау"];
CitiesGismeteoArray[443]=["Kreuzau","Кройцау"];
CitiesGismeteoArray[444]=["Kreuztal","Кройцтал"];
CitiesGismeteoArray[445]=["Kronach","Кронах"];
CitiesGismeteoArray[446]=["Kronberg","Кронберг"];
CitiesGismeteoArray[447]=["Cuxhaven","Кукхафен"];
CitiesGismeteoArray[448]=["Quedlinburg","Кюдлинбург"];
CitiesGismeteoArray[449]=["Kulmbach","Кюльмбах"];
CitiesGismeteoArray[450]=["Kunzell","Кюнцель"];
CitiesGismeteoArray[451]=["Kunzelsau","Кюнцельсау"];
CitiesGismeteoArray[452]=["Kurten","Кюртен"];
CitiesGismeteoArray[453]=["Lohr","Лoр"];
CitiesGismeteoArray[454]=["Laatzen","Лаацен"];
CitiesGismeteoArray[455]=["Laage","Лаге"];
CitiesGismeteoArray[456]=["Leimen","Лаймен"];
CitiesGismeteoArray[457]=["Leinfelden","Лайнфельден"];
CitiesGismeteoArray[458]=["Laichingen","Лайхинген"];
CitiesGismeteoArray[459]=["Lampertheim","Лампертхайм"];
CitiesGismeteoArray[460]=["Langenfeld","Лангенфельд"];
CitiesGismeteoArray[461]=["Langenhagen","Лангенхаген"];
CitiesGismeteoArray[462]=["Landau","Ландау"];
CitiesGismeteoArray[463]=["Landsberg","Ландсберг"];
CitiesGismeteoArray[464]=["Landshut","Ландсхут"];
CitiesGismeteoArray[465]=["Lahr","Лар"];
CitiesGismeteoArray[466]=["Lauda-Konigshofen","Лауда-Кёнигсхофен"];
CitiesGismeteoArray[467]=["Laupheim","Лаупхайм"];
CitiesGismeteoArray[468]=["Lauf","Лауф"];
CitiesGismeteoArray[469]=["Lauchhammer","Лаухаммер"];
CitiesGismeteoArray[470]=["Lahnstein","Лахнштайн"];
CitiesGismeteoArray[471]=["Lebach","Лебах"];
CitiesGismeteoArray[472]=["Leer","Леер"];
CitiesGismeteoArray[473]=["Leipzig","Лейпциг"];
CitiesGismeteoArray[474]=["Lemgo","Лемго"];
CitiesGismeteoArray[475]=["Lengerich","Ленгерих"];
CitiesGismeteoArray[476]=["Lennestadt","Леннештадт"];
CitiesGismeteoArray[477]=["Leonberg","Леонберг"];
CitiesGismeteoArray[478]=["Leopoldshohe","Леопольдсхох"];
CitiesGismeteoArray[479]=["Lehrte","Лерте"];
CitiesGismeteoArray[480]=["Leverkusen","Леферкюсен"];
CitiesGismeteoArray[481]=["Lilienthal","Лилентхаль"];
CitiesGismeteoArray[482]=["Limbach","Лимбах"];
CitiesGismeteoArray[483]=["Limburg","Лимбург"];
CitiesGismeteoArray[484]=["Lingen","Линген"];
CitiesGismeteoArray[485]=["Lindau","Линдау"];
CitiesGismeteoArray[486]=["Lindlar","Линдлар"];
CitiesGismeteoArray[487]=["Lippstadt","Липпштадт"];
CitiesGismeteoArray[488]=["Leutkirch","Литкирх"];
CitiesGismeteoArray[489]=["Lichtenfels","Лихтенфельс"];
CitiesGismeteoArray[490]=["Lobau","Лобау"];
CitiesGismeteoArray[491]=["Lokstedt","Локсштед"];
CitiesGismeteoArray[492]=["Lohmar","Ломар"];
CitiesGismeteoArray[493]=["Lorrach","Лоррах"];
CitiesGismeteoArray[494]=["Losheim","Лосхайм"];
CitiesGismeteoArray[495]=["Lubbecke","Люббеке"];
CitiesGismeteoArray[496]=["Lubbenau","Люббенау"];
CitiesGismeteoArray[497]=["Lubeck","Любек"];
CitiesGismeteoArray[498]=["Ludwigsburg","Людвигсбург"];
CitiesGismeteoArray[499]=["Ludwigsfelde","Людвигсфельде"];
CitiesGismeteoArray[500]=["Ludwigshafen","Людвигшафен"];
CitiesGismeteoArray[501]=["Ludenscheid","Люденсхайд"];
CitiesGismeteoArray[502]=["Ludinghausen","Людингхаузен"];
CitiesGismeteoArray[503]=["Luckenwalde","Люкенвальд"];
CitiesGismeteoArray[504]=["Luneburg","Люнебург"];
CitiesGismeteoArray[505]=["Lunen","Люнен"];
CitiesGismeteoArray[506]=["Magdeburg","Магдебург"];
CitiesGismeteoArray[507]=["Mayen","Майен"];
CitiesGismeteoArray[508]=["Meinerzhagen","Майнерцхаген"];
CitiesGismeteoArray[509]=["Meiningen","Майнинген"];
CitiesGismeteoArray[510]=["Maintal","Майнтал"];
CitiesGismeteoArray[511]=["Mei?en","Майсен"];
CitiesGismeteoArray[512]=["Mannheim","Мангейм"];
CitiesGismeteoArray[513]=["Mainz","Маниц"];
CitiesGismeteoArray[514]=["Marbach","Марбах"];
CitiesGismeteoArray[515]=["Marburg","Марбург"];
CitiesGismeteoArray[516]=["Markkleeberg","Маркклиберг"];
CitiesGismeteoArray[517]=["Marktoberdorf","Марктобердорф"];
CitiesGismeteoArray[518]=["Marktredwitz","Марктредвиц"];
CitiesGismeteoArray[519]=["Marl","Марль"];
CitiesGismeteoArray[520]=["Marsberg","Марсберг"];
CitiesGismeteoArray[521]=["Meerbusch","Меербух"];
CitiesGismeteoArray[522]=["Meckenheim","Мекенгейм"];
CitiesGismeteoArray[523]=["Melle","Мелле"];
CitiesGismeteoArray[524]=["Memmingen","Мемминген"];
CitiesGismeteoArray[525]=["Menden","Менден"];
CitiesGismeteoArray[526]=["Meppen","Меппен"];
CitiesGismeteoArray[527]=["Merseburg","Мерсебург"];
CitiesGismeteoArray[528]=["Merzig","Мерциг"];
CitiesGismeteoArray[529]=["Mossingen","Мёсинген"];
CitiesGismeteoArray[530]=["Meschede","Месхеде"];
CitiesGismeteoArray[531]=["Mettmann","Меттманн"];
CitiesGismeteoArray[532]=["Metzingen","Метцинген"];
CitiesGismeteoArray[533]=["Mechernich","Мехерних"];
CitiesGismeteoArray[534]=["Minden","Минден"];
CitiesGismeteoArray[535]=["Meerane","Миране"];
CitiesGismeteoArray[536]=["Mittweida","Миттвайда"];
CitiesGismeteoArray[537]=["Mittenwald","Миттенвальд"];
CitiesGismeteoArray[538]=["Moers","Моерс"];
CitiesGismeteoArray[539]=["Molln","Мольн"];
CitiesGismeteoArray[540]=["Monheim","Монхайм"];
CitiesGismeteoArray[541]=["Morfelden-Walldorf","Морфельден-Вальдорф"];
CitiesGismeteoArray[542]=["Mosbach","Мосбах"];
CitiesGismeteoArray[543]=["Munster","Мунстер"];
CitiesGismeteoArray[544]=["Moormerland","Мурмерланд"];
CitiesGismeteoArray[545]=["Moosburg","Мусбург"];
CitiesGismeteoArray[546]=["Muhlacker","Мюлакер"];
CitiesGismeteoArray[547]=["Mullheim","Мюлльхайм"];
CitiesGismeteoArray[548]=["Muhldorf","Мюльдорф"];
CitiesGismeteoArray[549]=["Mulheim","Мюльхайм"];
CitiesGismeteoArray[550]=["Muhlhausen","Мюльхаузен"];
CitiesGismeteoArray[551]=["Munden","Мюнден"];
CitiesGismeteoArray[552]=["Munster","Мюнстер"];
CitiesGismeteoArray[553]=["Munchen","Мюнхен"];
CitiesGismeteoArray[554]=["Monchengladbach","Мюнхенгладбах"];
CitiesGismeteoArray[555]=["Much","Мюх"];
CitiesGismeteoArray[556]=["Muhlheim","Мюхльхайм"];
CitiesGismeteoArray[557]=["Nagold","Наголд"];
CitiesGismeteoArray[558]=["Naumburg","Наумбург"];
CitiesGismeteoArray[559]=["Nauen","Науэн"];
CitiesGismeteoArray[560]=["Neckarsulm","Некарсулм"];
CitiesGismeteoArray[561]=["Nettetal","Неттеталь"];
CitiesGismeteoArray[562]=["Netphen","Нетфен"];
CitiesGismeteoArray[563]=["Neuss","Неусс"];
CitiesGismeteoArray[564]=["Nidda","Нидда"];
CitiesGismeteoArray[565]=["Nidderau","Ниддерау"];
CitiesGismeteoArray[566]=["Niederkruchten","Ниддеркрюхтен"];
CitiesGismeteoArray[567]=["Niderkassel","Нидеркрассел"];
CitiesGismeteoArray[568]=["Nienburg","Нинбург"];
CitiesGismeteoArray[569]=["Nienhagen","Ноенхаген"];
CitiesGismeteoArray[570]=["Neu-Isenburg","Ной-Айзенбург"];
CitiesGismeteoArray[571]=["Neu-Anspach","Ной-Анспах"];
CitiesGismeteoArray[572]=["Neubrandenburg","Нойбранденбург"];
CitiesGismeteoArray[573]=["Neuburg","Нойбург"];
CitiesGismeteoArray[574]=["Neu Wulmstorf","Ной-Вульмсторф"];
CitiesGismeteoArray[575]=["Neuwied","Нойвьед"];
CitiesGismeteoArray[576]=["Neukirchen-Vluyn","Нойкирхен-Влюн"];
CitiesGismeteoArray[577]=["Neumarkt","Ноймаркт"];
CitiesGismeteoArray[578]=["Neumunster","Ноймюнстер"];
CitiesGismeteoArray[579]=["Neunkirchen","Нойнкирхен"];
CitiesGismeteoArray[580]=["Neunkirchen-Seelscheid","Нойнкирхен-Силсхайд"];
CitiesGismeteoArray[581]=["Neuruppin","Нойруппин"];
CitiesGismeteoArray[582]=["Neuss","Нойсс"];
CitiesGismeteoArray[583]=["Neustrelitz","Нойстрелиц"];
CitiesGismeteoArray[584]=["Neu-Ulm","Ной-Ульм"];
CitiesGismeteoArray[585]=["Neufahrn","Нойфарн"];
CitiesGismeteoArray[586]=["Neustadt","Нойштадт"];
CitiesGismeteoArray[587]=["Neustadt am Rubenberge","Нойштадт-ам-Рубенберг"];
CitiesGismeteoArray[588]=["Neustadt bei Coburg","Нойштадт-бей-Кобург"];
CitiesGismeteoArray[589]=["Neustadt in Holstein","Нойштадт-ин-Хольштайн"];
CitiesGismeteoArray[590]=["Norden","Норден"];
CitiesGismeteoArray[591]=["Nordenham","Норденхам"];
CitiesGismeteoArray[592]=["Norderstedt","Норденштед"];
CitiesGismeteoArray[593]=["Nordlingen","Нордлинген"];
CitiesGismeteoArray[594]=["Nordhausen","Нордхаузен"];
CitiesGismeteoArray[595]=["Nordhorn","Нордхорн"];
CitiesGismeteoArray[596]=["Northeim","Нортхайм"];
CitiesGismeteoArray[597]=["Nottuln","Ноттюльн"];
CitiesGismeteoArray[598]=["Numbrecht","Нюмбрехт"];
CitiesGismeteoArray[599]=["Nurnberg","Нюрнберг"];
CitiesGismeteoArray[600]=["Nurtingen","Нюртинген"];
CitiesGismeteoArray[601]=["Oberasbach","Оберасбах"];
CitiesGismeteoArray[602]=["Oberkirch","Оберкирх"];
CitiesGismeteoArray[603]=["Ober-Ramstadt","Обер-Рамштадт"];
CitiesGismeteoArray[604]=["Oberstdorf","Оберстдорф"];
CitiesGismeteoArray[605]=["Obertshausen","Обертсхаузен"];
CitiesGismeteoArray[606]=["Oberhausen","Оберхаусен"];
CitiesGismeteoArray[607]=["Oberursel","Оберюрсель"];
CitiesGismeteoArray[608]=["Odenthal","Одентал"];
CitiesGismeteoArray[609]=["???????????","Ое"];
CitiesGismeteoArray[610]=["Oelde","Оельде"];
CitiesGismeteoArray[611]=["Oerlinghausen","Оерлингхаузен"];
CitiesGismeteoArray[612]=["????????????","Ойбрах"];
CitiesGismeteoArray[613]=["Oer-Erkenschwick","Ойр-Эркеншвик"];
CitiesGismeteoArray[614]=["Oyten","Ойтен"];
CitiesGismeteoArray[615]=["Oldenburg","Ольденбург"];
CitiesGismeteoArray[616]=["Olpe","Ольпе"];
CitiesGismeteoArray[617]=["Olsberg","Ольсберг"];
CitiesGismeteoArray[618]=["Olching","Ольхинг"];
CitiesGismeteoArray[619]=["Oranienburg","Ораньенбург"];
CitiesGismeteoArray[620]=["Ohringen","Оринген"];
CitiesGismeteoArray[621]=["Osnabruck","Оснабрюк"];
CitiesGismeteoArray[622]=["Osterode","Остероде"];
CitiesGismeteoArray[623]=["Osterholz","Остерхольц"];
CitiesGismeteoArray[624]=["Ostfildern","Остфильдерн"];
CitiesGismeteoArray[625]=["Oschatz","Осхарц"];
CitiesGismeteoArray[626]=["Oschersleben","Осхерслебен"];
CitiesGismeteoArray[627]=["Ottweiler","Оттвейлер"];
CitiesGismeteoArray[628]=["Ottobrunn","Оттобрюнн"];
CitiesGismeteoArray[629]=["Overath","Оферат"];
CitiesGismeteoArray[630]=["Offenbach","Оффенбах"];
CitiesGismeteoArray[631]=["Offenburg","Оффенбург"];
CitiesGismeteoArray[632]=["Ochtrup","Охтрюп"];
CitiesGismeteoArray[633]=["Paderborn","Падерборн"];
CitiesGismeteoArray[634]=["Papenburg","Папенбург"];
CitiesGismeteoArray[635]=["Parchim","Пархим"];
CitiesGismeteoArray[636]=["Passau","Пасау"];
CitiesGismeteoArray[637]=["Peine","Пейне"];
CitiesGismeteoArray[638]=["Penzberg","Пенцберг"];
CitiesGismeteoArray[639]=["Petershagen","Петерсхаген"];
CitiesGismeteoArray[640]=["Pinneberg","Пиннеберг"];
CitiesGismeteoArray[641]=["Pirmasens","Пирмасенс"];
CitiesGismeteoArray[642]=["Pirna","Пирна"];
CitiesGismeteoArray[643]=["Plauen","Плауэн"];
CitiesGismeteoArray[644]=["Plettenberg","Плеттенберг"];
CitiesGismeteoArray[645]=["Pohlheim","Полхайм"];
CitiesGismeteoArray[646]=["Porta Westfalica","Порта-Вестфалика"];
CitiesGismeteoArray[647]=["Potsdam","Потсдам"];
CitiesGismeteoArray[648]=["Prenzlau","Пренцлау"];
CitiesGismeteoArray[649]=["Preetz","Прец"];
CitiesGismeteoArray[650]=["Pfaffenhofen","Пфаффенхофен"];
CitiesGismeteoArray[651]=["Puhlheim","Пюлхайм"];
CitiesGismeteoArray[652]=["Puttlingen","Пюттлинген"];
CitiesGismeteoArray[653]=["Pulheim","Пюххайм"];
CitiesGismeteoArray[654]=["Radeberg","Радеберг"];
CitiesGismeteoArray[655]=["Radebeuhl","Радебюль"];
CitiesGismeteoArray[656]=["Rahden","Раден"];
CitiesGismeteoArray[657]=["Radevormwald","Радеформвальд"];
CitiesGismeteoArray[658]=["Radolfzell","Радольфцель"];
CitiesGismeteoArray[659]=["Reit im Winkl","Райт-им-Винкль"];
CitiesGismeteoArray[660]=["Ratekau","Ратекау"];
CitiesGismeteoArray[661]=["Rathenow","Ратенау"];
CitiesGismeteoArray[662]=["Ratingen","Ратинген"];
CitiesGismeteoArray[663]=["Rhauderfehn","Раудерфен"];
CitiesGismeteoArray[664]=["Ravensburg","Рафенсбург"];
CitiesGismeteoArray[665]=["Rastatt","Раштатт"];
CitiesGismeteoArray[666]=["Rastede","Раштеде"];
CitiesGismeteoArray[667]=["Regensburg","Регенсбург"];
CitiesGismeteoArray[668]=["Rheda-Wiedenbruck","Реда-Вьеденбрук"];
CitiesGismeteoArray[669]=["Rhede","Реде"];
CitiesGismeteoArray[670]=["Rees","Реес"];
CitiesGismeteoArray[671]=["Rheinbach","Рейнбах"];
CitiesGismeteoArray[672]=["Reinbek","Рейнбек"];
CitiesGismeteoArray[673]=["Reinberg","Рейнберг"];
CitiesGismeteoArray[674]=["Rheine","Рейне"];
CitiesGismeteoArray[675]=["Rheinfelden","Рейнфельден"];
CitiesGismeteoArray[676]=["Reinheim","Рейнхайм"];
CitiesGismeteoArray[677]=["Rheinstetten","Рейнштеттен"];
CitiesGismeteoArray[678]=["Reichenbach","Рейхенбах"];
CitiesGismeteoArray[679]=["Reichshof","Рейхсхоф"];
CitiesGismeteoArray[680]=["Recklinghausen","Реклингхаузен"];
CitiesGismeteoArray[681]=["Rehlingen-Siersburg","Релинген-Сьерсбург"];
CitiesGismeteoArray[682]=["Remagen","Ремаген"];
CitiesGismeteoArray[683]=["Remseck","ремсек"];
CitiesGismeteoArray[684]=["Remscheid","Ремшайд"];
CitiesGismeteoArray[685]=["Rendsburg","Рендсбург"];
CitiesGismeteoArray[686]=["Ronnenberg","Рённенберг"];
CitiesGismeteoArray[687]=["Renningen","Реннинген"];
CitiesGismeteoArray[688]=["Reutlingen","Реутлинген"];
CitiesGismeteoArray[689]=["Ribniz-Damgarten","Рибниц-Дамгартен"];
CitiesGismeteoArray[690]=["Riegelsberg","Ригельсберг"];
CitiesGismeteoArray[691]=["Riedstadt","Ридштадт"];
CitiesGismeteoArray[692]=["Rinteln","Ринтельн"];
CitiesGismeteoArray[693]=["Rodgau","Родгау"];
CitiesGismeteoArray[694]=["Rodermark","Родермарк"];
CitiesGismeteoArray[695]=["Rosenheim","Розенхайм"];
CitiesGismeteoArray[696]=["Rosrath","Росрат"];
CitiesGismeteoArray[697]=["Rostock","Росток"];
CitiesGismeteoArray[698]=["Rothenburg","Ротенбург"];
CitiesGismeteoArray[699]=["Rottweil","Роттвеил"];
CitiesGismeteoArray[700]=["Rottenburg","Роттенбург"];
CitiesGismeteoArray[701]=["Rudersdorf","Рудерсдорф"];
CitiesGismeteoArray[702]=["Rudolstadt","Рудольштадт"];
CitiesGismeteoArray[703]=["Roth","Рут"];
CitiesGismeteoArray[704]=["Riesa","Рьеса"];
CitiesGismeteoArray[705]=["Rietberg","Рьетберг"];
CitiesGismeteoArray[706]=["Russelsheim","Рюссельсхайм"];
CitiesGismeteoArray[707]=["Saalfeld","Саальфельд"];
CitiesGismeteoArray[708]=["Saarbrucken","Саарбрюккен"];
CitiesGismeteoArray[709]=["Saarlouis","Саарлуис"];
CitiesGismeteoArray[710]=["Schalke","Сайке"];
CitiesGismeteoArray[711]=["Salzgitter","Салзгиттер"];
CitiesGismeteoArray[712]=["Stankt Augustin","Санкт-Августин"];
CitiesGismeteoArray[713]=["St. Wendel","Санкт-Вендель"];
CitiesGismeteoArray[714]=["St. Ingbert","Санкт-Ингберт"];
CitiesGismeteoArray[715]=["Sachsenheim","Сахсенхайм"];
CitiesGismeteoArray[716]=["Solingen","Солинген"];
CitiesGismeteoArray[717]=["Taunusstein","Таунусштайн"];
CitiesGismeteoArray[718]=["Taufkirchen","Тауфкирхен"];
CitiesGismeteoArray[719]=["Telgte","Тельгте"];
CitiesGismeteoArray[720]=["Teltow","Тельтов"];
CitiesGismeteoArray[721]=["Templin","Темплин"];
CitiesGismeteoArray[722]=["Tettnang","Теттнанг"];
CitiesGismeteoArray[723]=["Tonisvorst","Тонисфорст"];
CitiesGismeteoArray[724]=["Torgau","Торгау"];
CitiesGismeteoArray[725]=["Traunreut","Траунреут"];
CitiesGismeteoArray[726]=["Traunstein","Траунштайн"];
CitiesGismeteoArray[727]=["Trier","Триер"];
CitiesGismeteoArray[728]=["Troisdorf","Тройсдорф"];
CitiesGismeteoArray[729]=["Trossingen","Троссинген"];
CitiesGismeteoArray[730]=["Tubingen","Тубинген"];
CitiesGismeteoArray[731]=["Tuttlingen","Туттлинген"];
CitiesGismeteoArray[732]=["Ubach-Palenberg","Убах-Паленберг"];
CitiesGismeteoArray[733]=["Uberlingen","Уберлинген"];
CitiesGismeteoArray[734]=["Ulm","Ульм"];
CitiesGismeteoArray[735]=["Unna","Унна"];
CitiesGismeteoArray[736]=["Unterhaching","Унтерахинг"];
CitiesGismeteoArray[737]=["Unterschlei?heim","УнтерШлейсхайм"];
CitiesGismeteoArray[738]=["Uslar","Услар"];
CitiesGismeteoArray[739]=["Uelzen","Уэльцен"];
CitiesGismeteoArray[740]=["Uetersen","Уэтерсен"];
CitiesGismeteoArray[741]=["Uetze","Уэтце"];
CitiesGismeteoArray[742]=["Vaihingen","Файхинген"];
CitiesGismeteoArray[743]=["Falkensee","Фалькензее"];
CitiesGismeteoArray[744]=["Varel","Фарель"];
CitiesGismeteoArray[745]=["Vaterstetten","Фатерштеттен"];
CitiesGismeteoArray[746]=["Fellbach","Феллбах"];
CitiesGismeteoArray[747]=["Velbert","Фельберт"];
CitiesGismeteoArray[748]=["Fellmar","Фельмар"];
CitiesGismeteoArray[749]=["Voerde","Фёрде"];
CitiesGismeteoArray[750]=["Verden","Ферден"];
CitiesGismeteoArray[751]=["Verl","Ферль"];
CitiesGismeteoArray[752]=["Versmold","Ферсмольд"];
CitiesGismeteoArray[753]=["Vechelde","Фехельде"];
CitiesGismeteoArray[754]=["Vechta","Фехта"];
CitiesGismeteoArray[755]=["Villingen-Schwenningen","Филлинген-Швеннинген"];
CitiesGismeteoArray[756]=["Vilshofen","Филшофен"];
CitiesGismeteoArray[757]=["Filderstadt","Фильдерштадт"];
CitiesGismeteoArray[758]=["Finnentrop","Финнентроп"];
CitiesGismeteoArray[759]=["Finsterwalde","Финстервальде"];
CitiesGismeteoArray[760]=["Pfinztal","Финцтал"];
CitiesGismeteoArray[761]=["Viernheim","Фирнхайм"];
CitiesGismeteoArray[762]=["Viersen","Фирсен"];
CitiesGismeteoArray[763]=["Flensburg","Фленсбург"];
CitiesGismeteoArray[764]=["Florsheim","Флорсхайм"];
CitiesGismeteoArray[765]=["Vlotho","Флото"];
CitiesGismeteoArray[766]=["Volklingen","Фольклинген"];
CitiesGismeteoArray[767]=["Forst","Форст"];
CitiesGismeteoArray[768]=["Forcheim","Форсхайм"];
CitiesGismeteoArray[769]=["Pforzheim","Форцхайм"];
CitiesGismeteoArray[770]=["Freiberg","Фрайберг"];
CitiesGismeteoArray[771]=["Freiburg","Фрайбург"];
CitiesGismeteoArray[772]=["Freilassing","Фрайлассинг"];
CitiesGismeteoArray[773]=["Freising","Фрайсинг"];
CitiesGismeteoArray[774]=["Freital","Фрайталь"];
CitiesGismeteoArray[775]=["Frankenthal","Франкентхал"];
CitiesGismeteoArray[776]=["Frankfurt","Франкфурт"];
CitiesGismeteoArray[777]=["Vreden","Фреден"];
CitiesGismeteoArray[778]=["Frechen","Фрехен"];
CitiesGismeteoArray[779]=["Friedrichsdorf","Фридрихсдорф"];
CitiesGismeteoArray[780]=["Friedrichshafen","Фридрихсхафен"];
CitiesGismeteoArray[781]=["Friesoythe","Фризойте"];
CitiesGismeteoArray[782]=["Freudenberg","Фройденберг"];
CitiesGismeteoArray[783]=["Freudenstadt","Фройденштадт"];
CitiesGismeteoArray[784]=["Frondenberg","Фронденберг"];
CitiesGismeteoArray[785]=["Pfungstadt","Фунгштадт"];
CitiesGismeteoArray[786]=["Fulda","Фюлда"];
CitiesGismeteoArray[787]=["Pfullingen","Фюллинген"];
CitiesGismeteoArray[788]=["Furstenwalde","Фюрстенвальде"];
CitiesGismeteoArray[789]=["Furstenfeldbruck","Фюрстенфельдбрук"];
CitiesGismeteoArray[790]=["Furth","Фюрт"];
CitiesGismeteoArray[791]=["Fussen","Фюссен"];
CitiesGismeteoArray[792]=["Haan","Хаан"];
CitiesGismeteoArray[793]=["Haar","Хаар"];
CitiesGismeteoArray[794]=["Hagen","Хаген"];
CitiesGismeteoArray[795]=["Haiger","Хайгер"];
CitiesGismeteoArray[796]=["Heide","Хайде"];
CitiesGismeteoArray[797]=["Heidelberg","Хайдельберг"];
CitiesGismeteoArray[798]=["Heidenau","Хайденау"];
CitiesGismeteoArray[799]=["Heidenheim","Хайденхайм"];
CitiesGismeteoArray[800]=["Heilbad Heiligenstadt","Хайлбад-Хайлигенштадт"];
CitiesGismeteoArray[801]=["Heiligenhaus","Хайлигенхаус"];
CitiesGismeteoArray[802]=["Hainburg","Хайнбург"];
CitiesGismeteoArray[803]=["Hainsberg","Хайнсберг"];
CitiesGismeteoArray[804]=["Huckelhoven","Хакельхафен"];
CitiesGismeteoArray[805]=["Huckeswagen","Хакесваген"];
CitiesGismeteoArray[806]=["Halle","Халле"];
CitiesGismeteoArray[807]=["Halberstadt","Хальберштадт"];
CitiesGismeteoArray[808]=["Halver","Хальвер"];
CitiesGismeteoArray[809]=["Haldensleben","Хальденслебен"];
CitiesGismeteoArray[810]=["Halstenbek","Хальстенбек"];
CitiesGismeteoArray[811]=["Haltern","Хальтерн"];
CitiesGismeteoArray[812]=["Hameln","Хамельн"];
CitiesGismeteoArray[813]=["Hamm","Хамм"];
CitiesGismeteoArray[814]=["Hamminkeln","Хамминкёльн"];
CitiesGismeteoArray[815]=["Hanau","Ханау"];
CitiesGismeteoArray[816]=["Xanten","Хантен"];
CitiesGismeteoArray[817]=["Haren","Харен"];
CitiesGismeteoArray[818]=["Harsewinkel","Харсвинкель"];
CitiesGismeteoArray[819]=["Ha?loch","Хасслох"];
CitiesGismeteoArray[820]=["Hattersheim","Хаттерсхайм"];
CitiesGismeteoArray[821]=["Hattingen","Хаттинген"];
CitiesGismeteoArray[822]=["Heidelberg","Хейдельберг"];
CitiesGismeteoArray[823]=["Heilbronn","Хейлбронн"];
CitiesGismeteoArray[824]=["Heiligendamm","Хейлигендам"];
CitiesGismeteoArray[825]=["Helmstedt","Хельмштед"];
CitiesGismeteoArray[826]=["Hemer","Хемер"];
CitiesGismeteoArray[827]=["Hemmingen","Хемминген"];
CitiesGismeteoArray[828]=["Chemnitz","Хемниц"];
CitiesGismeteoArray[829]=["Hennef","Хеннеф"];
CitiesGismeteoArray[830]=["Hennigsdorf","Хеннигсдорф"];
CitiesGismeteoArray[831]=["Henstedt-Ulzburg","Хенштед-Улцбург"];
CitiesGismeteoArray[832]=["Heppenheim","Хеппенхайм"];
CitiesGismeteoArray[833]=["Herborn","Херборн"];
CitiesGismeteoArray[834]=["Herdecke","Хердеке"];
CitiesGismeteoArray[835]=["Herne","Херне"];
CitiesGismeteoArray[836]=["Herrenberg","Херренберг"];
CitiesGismeteoArray[837]=["Herten","Хертен"];
CitiesGismeteoArray[838]=["Herford","Херфорд"];
CitiesGismeteoArray[839]=["Herzebrock-Clarholz","Херцебрук-Клархольц"];
CitiesGismeteoArray[840]=["Herzogenrath","Херцогенрат"];
CitiesGismeteoArray[841]=["Herzogenaurach","Херцогенурах"];
CitiesGismeteoArray[842]=["Hessisch Oldendorf","Хессих-Олдендорф"];
CitiesGismeteoArray[843]=["Hettstedt","Хеттштед"];
CitiesGismeteoArray[844]=["Heusenstamm","Хеузенштамм"];
CitiesGismeteoArray[845]=["Heusweiler","Хеусвайлер"];
CitiesGismeteoArray[846]=["Hechingen","Хехинген"];
CitiesGismeteoArray[847]=["Hiddenhausen","Хидденхаузен"];
CitiesGismeteoArray[848]=["Hille","Хилле"];
CitiesGismeteoArray[849]=["Hilden","Хильден"];
CitiesGismeteoArray[850]=["Hildesheim","Хильдесхайм"];
CitiesGismeteoArray[851]=["Hilchenbach","Хильченбах"];
CitiesGismeteoArray[852]=["Hoyerswerda","Хойерсверда"];
CitiesGismeteoArray[853]=["Hockenheim","Хокенхайм"];
CitiesGismeteoArray[854]=["Hoxter","Хокстер"];
CitiesGismeteoArray[855]=["Holzwickede","Хольцвикед"];
CitiesGismeteoArray[856]=["Holzkirchen","Хольцкирхен"];
CitiesGismeteoArray[857]=["Holzminden","Хольцминден"];
CitiesGismeteoArray[858]=["Homberg","Хомберг"];
CitiesGismeteoArray[859]=["Homburg","Хомбург"];
CitiesGismeteoArray[860]=["Horb","Хорб"];
CitiesGismeteoArray[861]=["Horn-Bad Meinberg","Хорн-Бад-Майнберг"];
CitiesGismeteoArray[862]=["Horstel","Хорстель"];
CitiesGismeteoArray[863]=["Hof","Хоф"];
CitiesGismeteoArray[864]=["Hofgeismar","Хофгайсмар"];
CitiesGismeteoArray[865]=["Hovelhof","Хофельхоф"];
CitiesGismeteoArray[866]=["Hofheim","Хофхайм"];
CitiesGismeteoArray[867]=["Hohen Neuendorf","Хохен-Нойендорф"];
CitiesGismeteoArray[868]=["Hohenstein-Ernstthal","Хохенштайн-Эрнстхал"];
CitiesGismeteoArray[869]=["Hochheim","Хоххайм"];
CitiesGismeteoArray[870]=["Husum","Хузум"];
CitiesGismeteoArray[871]=["Hurth","Хурт"];
CitiesGismeteoArray[872]=["Hude","Хьюде"];
CitiesGismeteoArray[873]=["Huhnfeld","Хюнфельд"];
CitiesGismeteoArray[874]=["Zweibrucken","Цвайбрюккен"];
CitiesGismeteoArray[875]=["Zwickau","Цвикау"];
CitiesGismeteoArray[876]=["Zeitz","Цейц"];
CitiesGismeteoArray[877]=["Celle","Целле"];
CitiesGismeteoArray[878]=["Zerbst","Цербст"];
CitiesGismeteoArray[879]=["Zirndorf","Цирндорф"];
CitiesGismeteoArray[880]=["Zittau","Циттау"];
CitiesGismeteoArray[881]=["Zulpich","Цуплих"];
CitiesGismeteoArray[882]=["Schwabach","Швабах"];
CitiesGismeteoArray[883]=["Schwalbach","Швалбах"];
CitiesGismeteoArray[884]=["Schwalmstadt","Швалмштадт"];
CitiesGismeteoArray[885]=["Schwalmtal","Швальмталь"];
CitiesGismeteoArray[886]=["Schwandorf","Швандорф"];
CitiesGismeteoArray[887]=["Schwanewede","Шваневеде"];
CitiesGismeteoArray[888]=["Schwarzenberg","Шварценберг"];
CitiesGismeteoArray[889]=["Schwabisch Gmund","Швебиш-Гмунд"];
CitiesGismeteoArray[890]=["Schwabisch Hall","Швебиш-Халль"];
CitiesGismeteoArray[891]=["Schwedt","Швед"];
CitiesGismeteoArray[892]=["Schweinfurt","Швейнфурт"];
CitiesGismeteoArray[893]=["Schwelm","Швельм"];
CitiesGismeteoArray[894]=["Schwerin","Шверин"];
CitiesGismeteoArray[895]=["Schwerte","Шверте"];
CitiesGismeteoArray[896]=["Schwetzingen","Швецинген"];
CitiesGismeteoArray[897]=["Schonefeld","Шенефельд"];
CitiesGismeteoArray[898]=["Schneverdingen","Шенефердинген"];
CitiesGismeteoArray[899]=["Schiffweiler","Шиффвейлер"];
CitiesGismeteoArray[900]=["Schifferstadt","Шифферштадт"];
CitiesGismeteoArray[901]=["Schkeuditz","Шкюдиц"];
CitiesGismeteoArray[902]=["Schleswig","Шлесвиг"];
CitiesGismeteoArray[903]=["Schlo? Holte-Stukenbrock","Шлосс-Хольте-Стюкенброк"];
CitiesGismeteoArray[904]=["Schluchtern","Шлюхтерн"];
CitiesGismeteoArray[905]=["Schmalkalden","Шмалкальден"];
CitiesGismeteoArray[906]=["Schmallenberg","Шмалленберг"];
CitiesGismeteoArray[907]=["Schmelz","Шмельц"];
CitiesGismeteoArray[908]=["Schneeberg","Шнееберг"];
CitiesGismeteoArray[909]=["Schonebeck","Шонебек"];
CitiesGismeteoArray[910]=["Schopfheim","Шопфхайм"];
CitiesGismeteoArray[911]=["Schorndorf","Шорндорф"];
CitiesGismeteoArray[912]=["Schortens","Шортенс"];
CitiesGismeteoArray[913]=["Speyer","Шпеер"];
CitiesGismeteoArray[914]=["Spenge","Шпенге"];
CitiesGismeteoArray[915]=["Spremberg","Шпремберг"];
CitiesGismeteoArray[916]=["Springe","Шпринге"];
CitiesGismeteoArray[917]=["Sprockhovel","Шпрокхофель"];
CitiesGismeteoArray[918]=["Schramberg","Шрамберг"];
CitiesGismeteoArray[919]=["Schrobenhausen","Шробенхаузен"];
CitiesGismeteoArray[920]=["Stade","Штаде"];
CitiesGismeteoArray[921]=["Stadtallendorf","Штадталлендорф"];
CitiesGismeteoArray[922]=["Stadtlohn","Штадтлон"];
CitiesGismeteoArray[923]=["Stadthagen","Штадтхаген"];
CitiesGismeteoArray[924]=["Starnberg","Штарнберг"];
CitiesGismeteoArray[925]=["Sta?furt","Штасфурт"];
CitiesGismeteoArray[926]=["Steinfurt","Штейнфурт"];
CitiesGismeteoArray[927]=["Steinhagen","Штейнхаген"];
CitiesGismeteoArray[928]=["Stendal","Штендаль"];
CitiesGismeteoArray[929]=["Stockach","Штоках"];
CitiesGismeteoArray[930]=["Stockelsdorf","Штокельсдорф"];
CitiesGismeteoArray[931]=["Stolberg","Штольберг"];
CitiesGismeteoArray[932]=["Straelen","Штрайлен"];
CitiesGismeteoArray[933]=["Stralsund","Штральзунд"];
CitiesGismeteoArray[934]=["Straubing","Штраубинг"];
CitiesGismeteoArray[935]=["Strausberg","Штраусберг"];
CitiesGismeteoArray[936]=["Stuhr","Штур"];
CitiesGismeteoArray[937]=["Stuttgart","Штутгарт"];
CitiesGismeteoArray[938]=["Stutensee","Штутензи"];
CitiesGismeteoArray[939]=["Eberbach","Эбербах"];
CitiesGismeteoArray[940]=["Eberswalde-Finow","Эберсвальде-Финоу"];
CitiesGismeteoArray[941]=["Eggenstein","Эггенштайн"];
CitiesGismeteoArray[942]=["Edewecht","Эдвехт"];
CitiesGismeteoArray[943]=["Eckernforde","Экернфорде"];
CitiesGismeteoArray[944]=["Ellwangen","Эллванген"];
CitiesGismeteoArray[945]=["Elmshorn","Элмсхорн"];
CitiesGismeteoArray[946]=["Elsdorf","Элсдорф"];
CitiesGismeteoArray[947]=["Eltville","Эльтвилле"];
CitiesGismeteoArray[948]=["Emden","Эмден"];
CitiesGismeteoArray[949]=["Emmendingen","Эммендинген"];
CitiesGismeteoArray[950]=["Emmerich","Эммерих"];
CitiesGismeteoArray[951]=["Emsdetten","Эмсдеттен"];
CitiesGismeteoArray[952]=["Engelskirchen","Энгельскирхен"];
CitiesGismeteoArray[953]=["Enger","Энгер"];
CitiesGismeteoArray[954]=["Ennepetal","Эннепетал"];
CitiesGismeteoArray[955]=["Ennigerloh","Эннигерлох"];
CitiesGismeteoArray[956]=["Eppelborn","Эппельборн"];
CitiesGismeteoArray[957]=["Eppingen","Эппинген"];
CitiesGismeteoArray[958]=["Erwitte","Эрвитт"];
CitiesGismeteoArray[959]=["Erding","Эрдинг"];
CitiesGismeteoArray[960]=["Erkelenz","Эркеленц"];
CitiesGismeteoArray[961]=["Erkrath","Эркрат"];
CitiesGismeteoArray[962]=["Erlangen","Эрланген"];
CitiesGismeteoArray[963]=["Erfurt","Эрфурт"];
CitiesGismeteoArray[964]=["Erftstadt","Эрфштадт"];
CitiesGismeteoArray[965]=["Espelkamp","Эспелкамп"];
CitiesGismeteoArray[966]=["Essen","Эссен"];
CitiesGismeteoArray[967]=["Esslingen","Эсслинген"];
CitiesGismeteoArray[968]=["Ettlingen","Эттлинген"];
CitiesGismeteoArray[969]=["Euskirchen","Эускирхен"];
CitiesGismeteoArray[970]=["Eutin","Эутин"];
CitiesGismeteoArray[971]=["Ehingen","Эхинген"];
CitiesGismeteoArray[972]=["Eschborn","Эшборн"];
CitiesGismeteoArray[973]=["Eschweiler","Эшвайлер"];
CitiesGismeteoArray[974]=["Eschwege","Эшвег"];







var lng_Month = {
	Jan: "Januar",
	Feb: "Februar",
	Mar: "März",
	Apr: "April",
	May: "Mai",
	Jun: "Juni",
	Jul: "Juli",
	Aug: "August",
	Sep: "September",
	Oct: "Oktober",
	Nov: "November",
	Dec: "Dezember"
};

var lng_Month_Short = {
	Jan: "Jan",
	Feb: "Feb",
	Mar: "Mär",
	Apr: "Apr",
	May: "Mai",
	Jun: "Jun",
	Jul: "Jul",
	Aug: "Aug",
	Sep: "Sep",
	Oct: "Okt",
	Nov: "Nov",
	Dec: "Dez"
};

var lng_Month_full = {
	January: "Januar",
	February: "Februar",
	March: "März",
	April: "April",
	May: "Mai",
	June: "Juni",
	July: "Juli",
	August: "August",
	September: "September",
	October: "Oktober",
	November: "November",
	December: "Dezember"
};

