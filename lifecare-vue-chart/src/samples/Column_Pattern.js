this.chartVars = 'usePattern=true';
this.layoutStr =
	'<rMateChart backgroundColor="#FFFFFF" borderStyle="none">' +
	'<Options>' +
	'<Caption text="Pattern of Column 2D Chart"/>' +
	'<Legend defaultMouseOverAction="true"/>' +
	'</Options>' +
	'<NumberFormatter id="numfmt" useThousandsSeparator="true"/>' +
	/* 차트 초기 출력시 웹 접근성 패턴을 설정하여 출력하고 싶다면 아래처럼 patternMode를 true로 설정하십시오. */
	'<Column2DChart showDataTips="true" patternMode="true">' +
	'<horizontalAxis>' +
	'<CategoryAxis categoryField="Month"/>' +
	'</horizontalAxis>' +
	'<verticalAxis>' +
	'<LinearAxis formatter="{numfmt}"/>' +
	'</verticalAxis>' +
	'<series>' +
	'<Column2DSet type="stacked" showTotalLabel="true">' +
	'<series>' +
	'<Column2DSeries yField="tv" displayName="TV">' +
	'<showDataEffect>' +
	'<SeriesInterpolate/>' +
	'</showDataEffect>' +
	'</Column2DSeries>' +
	'<Column2DSeries yField="tablet" displayName="Tablet">' +
	'<showDataEffect>' +
	'<SeriesInterpolate/>' +
	'</showDataEffect>' +
	'</Column2DSeries>' +
	'<Column2DSeries yField="phone" displayName="Cell Phone">' +
	'<showDataEffect>' +
	'<SeriesInterpolate/>' +
	'</showDataEffect>' +
	'</Column2DSeries>' +
	'</series>' +
	'</Column2DSet>' +
	'</series>' +
	'</Column2DChart>' +
	'</rMateChart>';

this.chartData = [
	{ Month: 'Jan', phone: 12, tv: 11, tablet: 12 },
	{ Month: 'Feb', phone: 14, tv: 19, tablet: 17 },
	{ Month: 'Mar', phone: 23, tv: 25, tablet: 20 },
	{ Month: 'Apr', phone: 20, tv: 20, tablet: 18 },
	{ Month: 'May', phone: 35, tv: 25, tablet: 25 },
	{ Month: 'Jun', phone: 20, tv: 22, tablet: 23 },
	{ Month: 'Jul', phone: 17, tv: 20, tablet: 17 },
	{ Month: 'Aug', phone: 23, tv: 21, tablet: 21 },
	{ Month: 'Sep', phone: 18, tv: 17, tablet: 10 },
	{ Month: 'Oct', phone: 27, tv: 30, tablet: 10 },
	{ Month: 'Nov', phone: 13, tv: 35, tablet: 17 },
	{ Month: 'Dec', phone: 40, tv: 19, tablet: 23 },
];
