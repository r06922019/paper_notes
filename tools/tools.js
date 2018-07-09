function format_paper_name(paper_name) // "XXX YYY" -> "Xxx Yyy"
{
	var components = paper_name.split(' ');
    for(var i = 0; i < components.length; ++i)
        components[i] = components[i][0].toUpperCase() + components[i].substring(1).toLowerCase();
	return components.join(' ');
}

