class ReadOnlyExporter{
    read(data){
      console.log(`Reading ${data.length} rows`)
      return `reading done for ${data.length} rows`
    }
}

class ReportExporter extends ReadOnlyExporter{
  export(data) {
    console.log(`Exporting ${data.length} rows`);
    return `exported-${data.length}-rows`;
  }
}

class PdfExporter extends ReportExporter {
  export(data) {
    console.log(`PDF with ${data.length} rows`);
    return `pdf-${data.length}-rows`;
  }
}

class CsvExporter extends ReportExporter {
  export(data) {
    console.log(`CSV with ${data.length} rows`);
    return `csv-${data.length}-rows`;
  }
}

class DocsExporter extends ReadOnlyExporter{
    export(data){
        console.log(`DOCS with ${data.length} rows`)
        return `docs-${data.length}-rows`
    }
}

function exportingReports(exporters,data){
    for(let exporter of exporters){
        console.log(exporter.export(data))
        console.log(exporter.read(data))
    }
    
}
exportingReports([new PdfExporter(), new CsvExporter(),new DocsExporter()],[1,2,3])

class ROE extends ReadOnlyExporter{}