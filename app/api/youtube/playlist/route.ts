const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;

export async function GET() {
  if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
    return new Response(JSON.stringify({ error: 'Missing API key or channel ID' }), { status: 400 });
  }

  try {
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );

    const playlistData = await playlistRes.json();

    const playlistMap = await Promise.all(
      playlistData.items.map(async (playlist: { id: string; snippet: { title: string } }) => {
        const playlistId = playlist.id;
        const title = playlist.snippet.title;

        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=60&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
        );
        const videosData = await videosRes.json();

        const result = videosData.items.map((item: { snippet: { title: string; publishedAt: string; resourceId: { videoId: string } } }, index: number) => ({
          id: index + 1,
          title: item.snippet.title,
          year: new Date(item.snippet.publishedAt).getFullYear(),
          type: title,
          subtype: '',
          yturl: item.snippet.resourceId.videoId,
        }));

        return {
          playlistTitle: title,
          items: result,
        };
      })
    );

    return new Response(JSON.stringify({ playlists: playlistMap }), { status: 200 });
  } catch (error) {
    console.error('Fetch failed', error);
    return new Response(JSON.stringify({ error: 'Fetch failed' }), { status: 500 });
  }
}