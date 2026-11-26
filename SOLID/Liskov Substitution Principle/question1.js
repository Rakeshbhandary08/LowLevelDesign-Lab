class ReportExporter {
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

class ReadOnlyExporter extends ReportExporter {
  export(data) {
    throw new Error("Read-only mode: exporting not allowed");
  }
}

function runMonthlyReports(exporters, data) {
  for (const exporter of exporters) {
    const result = exporter.export(data);
    console.log("Saved file:", result);
  }
}

runMonthlyReports(
  [new PdfExporter(), new CsvExporter(), new ReadOnlyExporter()],
  [1, 2, 3]
);