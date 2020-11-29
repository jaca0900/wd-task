const express = require('express');
const router = express.Router();
const { StatusReportRepository } = require('./status-report.repository');

router.get('/:job_id', (req, res) => {
  const statusReports = new StatusReportRepository();

  statusReports.getStatusReport(req.params.job_id)
    .then((statusReport) => {
      console.log(statusReport);

      res.status(200).json(statusReport);
    })
    .catch((err) => res.status(err.status).json(err));
});

module.exports = router;
