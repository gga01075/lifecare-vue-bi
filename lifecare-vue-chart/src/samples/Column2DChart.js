this.layoutStr =
	'<rMateChart backgroundColor="#FFFFFF" borderStyle="none">' +
	'<Options>' +
	'<Caption text="World Top 10 - Fastest Growing Economies (2017)" />' +
	'<SubCaption text="GDP Growth (In %)" textAlign="center" />' +
	'</Options>' +
	'<SeriesInterpolate id="ss"/>' +
	'<Column2DChart showDataTips="true" selectionMode="multiple" columnWidthRatio="0.48">' +
	'<horizontalAxis>' +
	'<CategoryAxis categoryField="Country"/>' +
	'</horizontalAxis>' +
	'<verticalAxis>' +
	'<LinearAxis maximum="100" interval="10"/>' +
	'</verticalAxis>' +
	'<series>' +
	'<Column2DSeries labelPosition="outside" yField="GDP" displayName="GDP Growth (In %)" showDataEffect="{ss}" showValueLabels="[4]"/>' +
	'</series>' +
	'</Column2DChart>' +
	'</rMateChart>';

this.chartData = [
	{ Country: 'South Sudan', GDP: 20 },
	{ Country: 'Libya', GDP: 30 },
	{ Country: 'Sierra Leone', GDP: 51.2 },
	{ Country: 'Mongolia', GDP: 44.5 },
	{ Country: 'Paraguay', GDP: 62.35 },
	{ Country: 'Timor Leste', GDP: 84.46 },
	{ Country: 'Iraq', GDP: 48.9 },
	{ Country: 'Panama', GDP: 38 },
	{ Country: 'Gambia', GDP: 60.5 },
	{ Country: 'Mozam-bique', GDP: 40.1 },
];
