(()=>{"use strict";let e=null,n="c";async function i(i){e=await async function(e){const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=edd981f1213248efa32193959240205&q=${e}`),i=await n.json(),{current:{temp_c:t,feelslike_c:d,wind_kph:s,temp_f:r,feelslike_f:c,wind_mph:m,condition:{icon:o},humidity:l,vis_km:p,vis_miles:u,pressure_mb:y,wind_dir:a},location:{name:h}}=i;return{tempC:t,feelsLikeC:d,windSpeedKph:s,tempF:r,feelsLikeF:c,windSpeedMph:m,icon:o,location:h,hum:l,visKph:p,visMph:u,pressure:y,windDir:a}}(i),t(n)}function t(n){const i=document.getElementById("temp-display"),t=document.getElementById("feels-like-display"),d=document.getElementById("wind-speed-display"),s=document.getElementById("icon-display"),r=document.getElementById("location-display"),c=document.getElementById("wind-direction"),m=document.getElementById("humidity"),o=document.getElementById("pressure"),l=document.getElementById("visibility");"c"===n?(i.innerHTML=`${e.tempC}°C`,t.innerHTML=`Feels Like:<br>${e.feelsLikeC}°C`,d.innerHTML=`Wind Speed:<br>${e.windSpeedKph} kph`,l.innerHTML=`Visibility: <br> ${e.visKph}kph`):(i.innerHTML=`${e.tempF}°F`,t.innerHTML=`Feels Like:<br>${e.feelsLikeF}°F`,d.innerHTML=`Wind Speed:<br>${e.windSpeedMph} mph`,l.innerHTML=`Visibility: <br> ${e.visMph}mph`),m.innerHTML=`Humidity:<br>${e.hum}`,o.innerHTML=`Pressure:<br>${e.pressure}`,c.innerHTML=`Wind dir:<br>${e.windDir}`,s.src=e.icon,r.textContent=e.location}function d(){n="c"===n?"f":"c",t(n)}!function(){document.getElementById("toggle-button").addEventListener("click",d);const e=document.getElementById("cityName");e.addEventListener("keydown",(n=>{"Enter"===n.key&&i(e.value)})),i("London")}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsSUNFSUEsRUFBYyxLQUNkQyxFQUFrQixJQUVmQyxlQUFlQyxFQUFjQyxHQUNoQ0osUURKV0UsZUFBNEJFLEdBQ3pDLE1BQU1DLFFBQWlCQyxNQUNyQixvRkFBOERGLEtBRTFESixRQUFvQkssRUFBU0UsUUFHakNDLFNBQVMsT0FDUEMsRUFBTSxZQUNOQyxFQUFXLFNBQ1hDLEVBQVEsT0FDUkMsRUFBTSxZQUNOQyxFQUFXLFNBQ1hDLEVBQ0FDLFdBQVcsS0FBRUMsR0FBTSxTQUNuQkMsRUFBUSxPQUNSQyxFQUFNLFVBQ05DLEVBQVMsWUFDVEMsRUFBVyxTQUNYQyxHQUVGQyxVQUFZQyxLQUFNRCxJQUNoQnRCLEVBRUosTUFBTyxDQUNMd0IsTUFBT2YsRUFDUGdCLFdBQVlmLEVBQ1pnQixhQUFjZixFQUNkZ0IsTUFBT2YsRUFDUGdCLFdBQVlmLEVBQ1pnQixhQUFjZixFQUNkRSxPQUNBTSxXQUNBUSxJQUFLYixFQUNMYyxPQUFTYixFQUNUYyxPQUFRYixFQUNSYyxTQUFTYixFQUNUYyxRQUFVYixFQUVkLENDbkN3QmMsQ0FBYS9CLEdBQ2pDZ0MsRUFBZW5DLEVBQ2pCLENBQ0ssU0FBU21DLEVBQWVDLEdBQzdCLE1BQU1DLEVBQWNDLFNBQVNDLGVBQWUsZ0JBQ3RDQyxFQUFtQkYsU0FBU0MsZUFBZSxzQkFDM0NFLEVBQW1CSCxTQUFTQyxlQUFlLHNCQUMzQ0csRUFBY0osU0FBU0MsZUFBZSxnQkFDdENJLEVBQWtCTCxTQUFTQyxlQUFlLG9CQUMxQ0ssRUFBaUJOLFNBQVNDLGVBQWUsa0JBQ3pDdkIsRUFBV3NCLFNBQVNDLGVBQWUsWUFDbkNNLEVBQWtCUCxTQUFTQyxlQUFlLFlBQzFDTyxFQUFhUixTQUFTQyxlQUFlLGNBRTFCLE1BQWJILEdBQ0ZDLEVBQVlVLFVBQVksR0FBR2hELEVBQVl3QixVQUN2Q2lCLEVBQWlCTyxVQUFZLGtCQUFrQmhELEVBQVl5QixlQUMzRGlCLEVBQWlCTSxVQUFZLGtCQUFrQmhELEVBQVkwQixtQkFDM0RxQixFQUFXQyxVQUFZLG9CQUFvQmhELEVBQVkrQixjQUd2RE8sRUFBWVUsVUFBWSxHQUFHaEQsRUFBWTJCLFVBQ3ZDYyxFQUFpQk8sVUFBWSxrQkFBa0JoRCxFQUFZNEIsZUFDM0RjLEVBQWlCTSxVQUFZLGtCQUFrQmhELEVBQVk2QixtQkFDM0RrQixFQUFXQyxVQUFZLG9CQUFvQmhELEVBQVlnQyxhQUd6RGYsRUFBUytCLFVBQVksZ0JBQWdCaEQsRUFBWThCLE1BQ2pEZ0IsRUFBZ0JFLFVBQVksZ0JBQWdCaEQsRUFBWWlDLFdBQ3hEWSxFQUFlRyxVQUFZLGdCQUFnQmhELEVBQVlrQyxVQUN2RFMsRUFBWU0sSUFBTWpELEVBQVlnQixLQUM5QjRCLEVBQWdCTSxZQUFjbEQsRUFBWXNCLFFBQzVDLENBQ08sU0FBUzZCLElBQ2RsRCxFQUFzQyxNQUFwQkEsRUFBMEIsSUFBTSxJQUNsRG1DLEVBQWVuQyxFQUNqQixFQ3hDZSxXQUVkc0MsU0FBU0MsZUFBZSxpQkFBaUJZLGlCQUFpQixRQUFTRCxHQUVsRSxNQUFNRSxFQUFhZCxTQUFTQyxlQUFlLFlBQzNDYSxFQUFXRCxpQkFBaUIsV0FBWUUsSUFDcEIsVUFBZEEsRUFBTUMsS0FDUnBELEVBQWNrRCxFQUFXRyxNQUMzQixJQUVGckQsRUFBYyxTQUNoQixDQ1hBc0QsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBqcy8uL3NyYy9mZXRjaFdlYXRoZXJBcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcGpzLy4vc3JjL3BvcHVsYXRlUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwanMvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwaUtleSA9IFwiZWRkOTgxZjEyMTMyNDhlZmEzMjE5Mzk1OTI0MDIwNVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKGNpdHkpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHthcGlLZXl9JnE9JHtjaXR5fWBcclxuICApO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBjdXJyZW50OiB7XHJcbiAgICAgIHRlbXBfYyxcclxuICAgICAgZmVlbHNsaWtlX2MsXHJcbiAgICAgIHdpbmRfa3BoLFxyXG4gICAgICB0ZW1wX2YsXHJcbiAgICAgIGZlZWxzbGlrZV9mLFxyXG4gICAgICB3aW5kX21waCxcclxuICAgICAgY29uZGl0aW9uOiB7IGljb24gfSxcclxuICAgICAgaHVtaWRpdHksXHJcbiAgICAgIHZpc19rbSxcclxuICAgICAgdmlzX21pbGVzLFxyXG4gICAgICBwcmVzc3VyZV9tYixcclxuICAgICAgd2luZF9kaXIsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb246IHsgbmFtZTogbG9jYXRpb24gfSxcclxuICB9ID0gd2VhdGhlckRhdGE7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0ZW1wQzogdGVtcF9jLFxyXG4gICAgZmVlbHNMaWtlQzogZmVlbHNsaWtlX2MsXHJcbiAgICB3aW5kU3BlZWRLcGg6IHdpbmRfa3BoLFxyXG4gICAgdGVtcEY6IHRlbXBfZixcclxuICAgIGZlZWxzTGlrZUY6IGZlZWxzbGlrZV9mLFxyXG4gICAgd2luZFNwZWVkTXBoOiB3aW5kX21waCxcclxuICAgIGljb24sXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGh1bTogaHVtaWRpdHksXHJcbiAgICB2aXNLcGggOiB2aXNfa20sXHJcbiAgICB2aXNNcGg6IHZpc19taWxlcyxcclxuICAgIHByZXNzdXJlOnByZXNzdXJlX21iLFxyXG4gICAgd2luZERpciA6IHdpbmRfZGlyLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tIFwiLi9mZXRjaFdlYXRoZXJBcGlcIjtcclxuXHJcbmxldCB3ZWF0aGVyRGF0YSA9IG51bGw7XHJcbmxldCBjdXJyZW50VGVtcFR5cGUgPSBcImNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKGNpdHkpIHtcclxuICAgIHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hXZWF0aGVyKGNpdHkpO1xyXG4gICAgZGlzcGxheVdlYXRoZXIoY3VycmVudFRlbXBUeXBlKTtcclxuICB9XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih0ZW1wVHlwZSkge1xyXG4gIGNvbnN0IHRlbXBEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWRpc3BsYXlcIik7XHJcbiAgY29uc3QgZmVlbHNMaWtlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS1kaXNwbGF5XCIpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtc3BlZWQtZGlzcGxheVwiKTtcclxuICBjb25zdCBpY29uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbi1kaXNwbGF5XCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tZGlzcGxheVwiKTtcclxuICBjb25zdCB3aW5kRGlyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1kaXJlY3Rpb25cIik7XHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xyXG4gIGNvbnN0IHByZXNzdXJlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIik7XHJcbiAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJpbGl0eVwiKTtcclxuICBcclxuICBpZiAodGVtcFR5cGUgPT09IFwiY1wiKSB7XHJcbiAgICB0ZW1wRGlzcGxheS5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wQ33CsENgO1xyXG4gICAgZmVlbHNMaWtlRGlzcGxheS5pbm5lckhUTUwgPSBgRmVlbHMgTGlrZTo8YnI+JHt3ZWF0aGVyRGF0YS5mZWVsc0xpa2VDfcKwQ2A7XHJcbiAgICB3aW5kU3BlZWREaXNwbGF5LmlubmVySFRNTCA9IGBXaW5kIFNwZWVkOjxicj4ke3dlYXRoZXJEYXRhLndpbmRTcGVlZEtwaH0ga3BoYDtcclxuICAgIHZpc2liaWxpdHkuaW5uZXJIVE1MID0gYFZpc2liaWxpdHk6IDxicj4gJHt3ZWF0aGVyRGF0YS52aXNLcGh9a3BoYFxyXG5cclxufSBlbHNlIHtcclxuICAgIHRlbXBEaXNwbGF5LmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLnRlbXBGfcKwRmA7XHJcbiAgICBmZWVsc0xpa2VEaXNwbGF5LmlubmVySFRNTCA9IGBGZWVscyBMaWtlOjxicj4ke3dlYXRoZXJEYXRhLmZlZWxzTGlrZUZ9wrBGYDtcclxuICAgIHdpbmRTcGVlZERpc3BsYXkuaW5uZXJIVE1MID0gYFdpbmQgU3BlZWQ6PGJyPiR7d2VhdGhlckRhdGEud2luZFNwZWVkTXBofSBtcGhgO1xyXG4gICAgdmlzaWJpbGl0eS5pbm5lckhUTUwgPSBgVmlzaWJpbGl0eTogPGJyPiAke3dlYXRoZXJEYXRhLnZpc01waH1tcGhgXHJcblxyXG59XHJcbiAgaHVtaWRpdHkuaW5uZXJIVE1MID0gYEh1bWlkaXR5Ojxicj4ke3dlYXRoZXJEYXRhLmh1bX1gO1xyXG4gIHByZXNzdXJlRGlzcGxheS5pbm5lckhUTUwgPSBgUHJlc3N1cmU6PGJyPiR7d2VhdGhlckRhdGEucHJlc3N1cmV9YDtcclxuICB3aW5kRGlyRGlzcGxheS5pbm5lckhUTUwgPSBgV2luZCBkaXI6PGJyPiR7d2VhdGhlckRhdGEud2luZERpcn1gO1xyXG4gIGljb25EaXNwbGF5LnNyYyA9IHdlYXRoZXJEYXRhLmljb247XHJcbiAgbG9jYXRpb25EaXNwbGF5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb247XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXBlcmF0dXJlVW5pdCgpIHtcclxuICBjdXJyZW50VGVtcFR5cGUgPSBjdXJyZW50VGVtcFR5cGUgPT09IFwiY1wiID8gXCJmXCIgOiBcImNcIjtcclxuICBkaXNwbGF5V2VhdGhlcihjdXJyZW50VGVtcFR5cGUpO1xyXG59XHJcbiIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXIsIHRvZ2dsZVRlbXBlcmF0dXJlVW5pdCB9IGZyb20gXCIuL3BvcHVsYXRlUGFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZSgpIHtcclxuICAvLyBjaGFuZ2UgYmV0d2VlbiBDIGFuZCBGXHJcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVRlbXBlcmF0dXJlVW5pdClcclxuICAvLyBnZXR0aW5nIHZhbHVlIGZyb20gdGhlIGlucHV0XHJcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eU5hbWVcIik7XHJcbiAgaW5wdXRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB1cGRhdGVXZWF0aGVyKGlucHV0VmFsdWUudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHVwZGF0ZVdlYXRoZXIoXCJMb25kb25cIik7XHJcbn1cclxuIiwiaW1wb3J0IHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xyXG5cclxucGFnZSgpIl0sIm5hbWVzIjpbIndlYXRoZXJEYXRhIiwiY3VycmVudFRlbXBUeXBlIiwiYXN5bmMiLCJ1cGRhdGVXZWF0aGVyIiwiY2l0eSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY3VycmVudCIsInRlbXBfYyIsImZlZWxzbGlrZV9jIiwid2luZF9rcGgiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiIsIndpbmRfbXBoIiwiY29uZGl0aW9uIiwiaWNvbiIsImh1bWlkaXR5IiwidmlzX2ttIiwidmlzX21pbGVzIiwicHJlc3N1cmVfbWIiLCJ3aW5kX2RpciIsImxvY2F0aW9uIiwibmFtZSIsInRlbXBDIiwiZmVlbHNMaWtlQyIsIndpbmRTcGVlZEtwaCIsInRlbXBGIiwiZmVlbHNMaWtlRiIsIndpbmRTcGVlZE1waCIsImh1bSIsInZpc0twaCIsInZpc01waCIsInByZXNzdXJlIiwid2luZERpciIsImZldGNoV2VhdGhlciIsImRpc3BsYXlXZWF0aGVyIiwidGVtcFR5cGUiLCJ0ZW1wRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZWVsc0xpa2VEaXNwbGF5Iiwid2luZFNwZWVkRGlzcGxheSIsImljb25EaXNwbGF5IiwibG9jYXRpb25EaXNwbGF5Iiwid2luZERpckRpc3BsYXkiLCJwcmVzc3VyZURpc3BsYXkiLCJ2aXNpYmlsaXR5IiwiaW5uZXJIVE1MIiwic3JjIiwidGV4dENvbnRlbnQiLCJ0b2dnbGVUZW1wZXJhdHVyZVVuaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5wdXRWYWx1ZSIsImV2ZW50Iiwia2V5IiwidmFsdWUiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==