php ../valit/bin/listOfChecks.php > _data/validationChecks.yml

rm -fr docs/valit/api
rm -fr docs/hayttp/api

sami update --force _build/valit-api-sami.php
sami update --force _build/hayttp-api-sami.php
