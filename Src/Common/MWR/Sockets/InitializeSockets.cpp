#include "StdAfx.h"
#include "InitializeSockets.h"
#include "SocketsException.h"

namespace MWR
{
	void InitializeSockets::Initialize()
	{
		WSADATA wsaData;
		if (auto err = WSAStartup(MAKEWORD(2, 2), &wsaData))
			throw MWR::SocketsException(OBF("Failed to initialize WinSock"), err);
	}

	void InitializeSockets::Deinitialize() noexcept
	{
		WSACleanup(); // ignore errors
	}
}
