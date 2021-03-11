import * as messages from '@cucumber/messages'

export default function gherkinDocumentToSource(
  gherkinDocument: messages.GherkinDocument
): messages.ISource {
  return messages.Source.create({
    uri: gherkinDocument.uri,
    mediaType: 'text/x.cucumber.gherkin+plain',
  })
}
