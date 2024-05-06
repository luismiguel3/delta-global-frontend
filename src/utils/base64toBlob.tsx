function toBlob(b64Data: string, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

function base64toBlob(base64: string, name: string) {
  const block = base64.split(";");
  const contentType = block[0].split(":")[1];
  const realData = block[1].split(",")[1];
  const blob = toBlob(realData, contentType);
  const file = new File([blob], name, { type: contentType });
  return file;
}

export default base64toBlob;
