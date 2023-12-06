async function transcribe(filePath) {
    const streamSource = {
        stream: fs.createReadStream(filePath),
        mimetype: "audio/mpeg",
    };
    return await deepgram.transcription.preRecorded(streamSource, {
        punctuate: true,
        language: "de",
        diarize: true,
        tier: "enhanced",
        summarize: true
    });
}